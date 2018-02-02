



using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;


namespace Xambda {
    public class Program {
		
    	public static void Main( string[ ] args ) { BuildWebHost( args ).Run( ); }
		
        public static IWebHost BuildWebHost( string[ ] args ) =>
            WebHost.CreateDefaultBuilder( args )
				.UseUrls( "http://localhost:7700" )
				.UseWebRoot( "Root" )
                .UseStartup<Startup>( )
                .Build( );
		
    }
}



