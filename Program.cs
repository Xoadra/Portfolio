



using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;


namespace Xambda {
    public class Program {
		
    	public static void Main( string[ ] args ) { BuildWebHost( args ).Run( ); }
		
        public static IWebHost BuildWebHost( string[ ] args ) =>
            WebHost.CreateDefaultBuilder( args )
				.UseWebRoot( "Root" )
				.UseUrls( "http://localhost:7700" )
                .UseStartup<Startup>( )
                .Build( );
		
    }
}


