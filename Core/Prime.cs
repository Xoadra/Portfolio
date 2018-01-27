



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
		[ Route( "/core/quote" ) ]
		public Dictionary<string, object> Quotes( ) {
			// Display a quote through an api call from Angular on the main page
			Dictionary<string, object> Quotes = new Dictionary<string, object>( );
			Quotes.Add( "author", "Ian Peterson" );
			Quotes.Add( "quote", "I am great!" );
			return Quotes;
		}
		
		[ HttpGet ]
        [ Route( "/core/data" ) ]
        public List<Dictionary<string, object>> Data( ) {
			// Vessels for database entries returned from querying
            List<Dictionary<string, object>> Data = _database.Query( "SELECT * FROM users" );
			return Data;
        }
		
		/* public IActionResult Error( ) {
			ViewData[ "RequestId" ] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
			return View( );
		} */
		
	}
}



