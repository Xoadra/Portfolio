



using System.Collections.Generic;
using System.Data;
using Microsoft.Extensions.Options;
//using MySql.Data.MySqlClient;
using Npgsql;


namespace Xambda {
	public class Database {
		
		// Variable for hosting database authentication information
		private readonly IOptions<Key> _Key;
		
		// Sources attribute within key object possessing connection requirements
		internal IDbConnection Access {
			// May need to be moved below constructor if placement in code presents issues
			// Using different database instead of MySQL, but using template until proper database library is imported
			get { return new NpgsqlConnection( _Key.Value.Keycode ); }
		}
		
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
							var obj = new Dictionary<string, object>( );
							for( int idx = 0; idx < scope.FieldCount; idx++ ) {
								obj.Add( scope.GetName( idx ), scope.GetValue( idx ) );
							}
							data.Add( obj );
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


