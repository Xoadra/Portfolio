



using System;
using System.Collections.Generic;
//using System.Diagnostics;
//using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Http;


namespace Xambda.Core {
	public class Prime : Controller {
		
		// Hosts database operation parameters
		private readonly Database _database;
		
		// Prime controller constructor injecting database access material
		public Prime( Database data ) { _database = data; }
		
		[ HttpGet ]
		[ Route( "quote" ) ]
		public Dictionary<string, object> Quotes( ) {
			// Display a quote through an api call from Angular on the main page
			Dictionary<string, object> Quotes = new Dictionary<string, object>( );
			Quotes.Add( "Author", "Ian Peterson" );
			Quotes.Add( "Quote", "I am great!" );
			return Quotes;
		}
		
		[ HttpGet ]
        [ Route( "users" ) ]
        public IEnumerable<Dictionary<string, object>> Hacker( ) {
			// Vessels for database entries returned from querying
            List<Dictionary<string, object>> Query = _database.Query( "SELECT * FROM users" );
			List<Dictionary<string, object>> Hackers = new List<Dictionary<string, object>>( );
			// Sort through queried data to verify value status
			for ( int idx = 0; idx < Query.Count; idx++ ) {
				// Generate dictionaries to add to a new list with parse-tolerant values
				Hackers.Add( new Dictionary<string, object>( ) );
				foreach ( var item in Query[ idx ] ) {
					// Add fields to each new dictionary and replace empty fields with parsable data
					if ( item.Value.GetType( ) == typeof( DBNull ) || item.Value.ToString( ) == "" ) {
						Hackers[ idx ].Add( item.Key, "!!!" );
					}
					else {
						Hackers[ idx ].Add( item.Key, item.Value );
					}
				}
			}
			return Hackers;
        }
		
		/* [ HttpGet ]
		[ Route( "" ) ]
		public IActionResult Index( ) {
			return View( );
		} */
		
		/* public IActionResult Error( ) {
			ViewData[ "RequestId" ] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
			return View( );
		} */
		
	}
}



