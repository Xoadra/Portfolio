



using System.Collections.Generic;
using System.Data;
//using MySql.Data.MySqlClient;


namespace Xambda {
	public class Database {
		
		static string server = "localhost";
		static string data = "database"; // Schema or database name
		static string port = "5432";
		static string user = "root"; // Temporary boilerplate user
		static string pass = "root"; // Not connection password
		
		internal static IDbConnection Access {
			get {
				// Will be moved to separate, hidden json file once configuration is ready
				// Using different database, not MySQL, but templating database access info for future use
				// May need to remove whitespace for functional operation but set for formatting purposes
				return new MySqlConnection(
					$"Server = { server };" +
					$"Port = { port };" +
					$"Database = { data };" +
					$"UserID = { user };" +
					$"Password = { pass };" +
					$"SslMode = None"
				);
			}
		}
		
		// Pulls data into a list of dictionaries for application uses
		public static List<Dictionary<string, object>> Query( string query ) {
			using( IDbConnection via = Access ) {
				using( IDbCommand exe = via.CreateCommand( ) ) {
					exe.CommandText = query;
					via.Open( );
					// Generate vessel for holding extracted data
					var data = new List<Dictionary<string, object>>( );
					using( IDataReader scope = exe.ExecuteReader( ) ) {
						while( scope.Read( ) ) {
							// Insert database tuples one-by-one into data vessel
							var object = new Dictionary<string, object>( );
							for( int idx = 0; idx < scope.FieldCount; idx++ ) {
								object.Add( scope.GetName( idx ), scope.GetValue( idx ) );
							}
							data.Add( object );
						}
						return data;
					}
				}
			}
		}
		
		// Queries for internal database executions excusively
		public static void Execute( string query ) {
			using ( DbConnection via = Access ) {
				using( IDbCommand exe = via.CreateCommand( ) ) {
					exe.CommandText = query;
					via.Open( );
					exe.ExecuteNonQuery( );
				}
			}
		}
		
	}
}



