



using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace Xambda {
	public class Startup {
		
		public IConfiguration Schema { get; }
		
		// Constructor for Startup
		// May need additional customization
		public Startup( IConfiguration schema ) { Schema = schema; }
		
		// Declaration and implementation of services executed upon runtime
		/* For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940 */
		public void ConfigureServices( IServiceCollection ops ) {
			ops.AddMvc( );
			ops.AddSession( );
		}
		
		// Handles full front-to-back application interaction with HTTP integration
		public void Configure( IApplicationBuilder soft, IHostingEnvironment zone ) {
			// Secrets that only I can see presumably for application error page displays
			if ( zone.IsDevelopment( ) ) { soft.UseDeveloperExceptionPage( ); }
			// Yup, it's empty...
			else {  }
			// Unsure of the purpose for the below commented-out line of code
			/* soft.Run( async ( context ) => { await context.Response.WriteAsync( "Hahaha you can't see anything! " ); } ); */
			soft.UseDefaultFiles( );  // Apparently important to integrate Angular into an ASP.NET Core project
			soft.UseStaticFiles( );
			soft.UseSession( );
			soft.UseMvc( );
		}
	
	}
}


