



using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;


namespace Xambda.Core {
	public class Nexus : Controller {
		
		// Hosts database operation parameters
		private readonly Database _database;
		
		// Nexus controller constructor injecting database access material
		public Nexus( Database data ) { _database = data; }
		
		[ HttpGet ]
		[ Route( "core/quote" ) ]
		public Dictionary<string, object> Quotes( ) {
			// Display a quote through an api call from Angular on the main page
			Dictionary<string, object> Quotes = new Dictionary<string, object>( );
			Quotes.Add( "author", "Ian Peterson" );
			Quotes.Add( "quote", "I am great!" );
			return Quotes;
		}
		
		[ HttpGet ]
        [ Route( "core/data" ) ]
        public List<Dictionary<string, object>> Data( ) {
			// Vessels for database entries returned from querying
            List<Dictionary<string, object>> Data = _database.Query( "SELECT * FROM users" );
			return Data;
        }
		
	}
}


