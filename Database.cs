



using System.Collections.Generic;
using System.Data;
using Microsoft.Extensions.Options;
using System.Net;
using Npgsql;


namespace Xambda {
	public class Database {
		
		// Variable for hosting database authentication information
		private readonly IOptions<Key> _Key;
		
		// Sources attribute within key object possessing connection requirements
		internal IDbConnection Access { get { return new NpgsqlConnection( _Key.Value.Keycode ); } }
		
		// Database class constructor for using database access parameters
		public Database( IOptions<Key> source ) { _Key = source; }
		
		// Pulls data into a list of dictionaries for application uses
		public List<Dictionary<string, object>> Query( string query ) {
			using( IDbConnection via = Access ) {
				using( IDbCommand exe = via.CreateCommand( ) ) {
					exe.CommandText = query;
					via.Open( );
					// Generate vessel for holding extracted data
					var data = new List<Dictionary<string, object>>( );
					using( IDataReader scope = exe.ExecuteReader( ) ) {
						while( scope.Read( ) ) {
							// Inject database tuples one-by-one into data vessel
							var mote = new Dictionary<string, object>( );
							for( int idx = 0; idx < scope.FieldCount; idx++ ) {
								// Convert DBNull type values into json-tolerant null values
								if ( scope.IsDBNull( idx ) ) {
									mote.Add( scope.GetName( idx ), null );
								}
								// Transform IPAddress type values to be parsable strings
								else if ( scope.GetValue( idx ).GetType( ) == typeof( IPAddress ) ) {
									mote.Add( scope.GetName( idx ), scope.GetString( idx ) );
								}
								// Otherwise, just return value without modification
								else {
									mote.Add( scope.GetName( idx ), scope.GetValue( idx ) );
								}
							}
							data.Add( mote );
						}
						return data;
					}
				}
			}
		}
		
		// Queries for internal database executions excusively
		public void Execute( string query ) {
			using ( IDbConnection via = Access ) {
				using( IDbCommand exe = via.CreateCommand( ) ) {
					exe.CommandText = query;
					via.Open( );
					exe.ExecuteNonQuery( );
				}
			}
		}
		
	}
}



