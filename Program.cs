



using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace Xambda {
	public class Program {

		public static void Main( string[ ] args ) {
			var host = new WebHostBuilder( )
				.UseKestrel( )
				.UseWebRoot( "Root" )
				.UseContentRoot( Directory.GetCurrentDirectory( ) )
				.UseStartup<Startup>( )
				.Build( );
			host.Run( );
		}

	}
}


