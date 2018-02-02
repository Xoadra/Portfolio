



using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace Xambda {
	public class Startup {
		
		public IConfiguration Schema { get; private set; }
		
		// Startup class constructor which fetches database access info stored as json
		public Startup( IHostingEnvironment zone ) {
			var generator = new ConfigurationBuilder( )
				.SetBasePath( zone.ContentRootPath )
				.AddJsonFile( "postgresql.json", optional: true, reloadOnChange: true )
				.AddEnvironmentVariables( );
			Schema = generator.Build( );
		}
		
		// Declaration and implementation of services executed upon runtime
		public void ConfigureServices( IServiceCollection ops ) {
			ops.AddMvc( );
			ops.AddSession( );
			// Grabs database access details for establishing database integration
			ops.Configure<Key>( Schema.GetSection( "PostgreSQL" ) );
			// Enables full application operation with the database
			ops.AddScoped<Database>( );
		}
		
		// Handles full front-to-back application interaction with HTTP integration
		public void Configure( IApplicationBuilder soft, IHostingEnvironment zone ) {
			// Presumably for application error page displays therefore secrets that only I can see 
			if ( zone.IsDevelopment( ) ) { soft.UseDeveloperExceptionPage( ); }
			// Yup, it's empty...
			else {  }
			// Allows files to be incorporated from outside of ASP.NET Core's scope
			soft.UseDefaultFiles( );  
			soft.UseStaticFiles( );
			soft.UseSession( );
			// Targets frontend routing after backend routing fails
			soft.UseMvc( view => { view.MapSpaFallbackRoute( "view", new { controller = "View", action = "Meta" } );
			} );
		}
	
	}
}


