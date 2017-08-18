



using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;


namespace Xambda {
	public class Startup {

		public IConfiguration Schema { get; private set; }

		public Startup( IHostingEnvironment zone ) {
			var build = new ConfigurationBuilder( )
				//.SetBasePath( zone.ContentRootPath )
				//.AddJsonFile( "nexus.json", optional: true, reloadOnChange: true )
				.AddEnvironmentVariables( );
				Schema = build.Build( );
		}

		public void ConfigureServices( IServiceCollection ops ) {
			ops.AddMvc( );
			ops.AddSession( );
			//ops.Configure<Nexus>( Schema.GetSection( "Datasource" ) );
			//ops.AddScoped<Database>( );
		}

		public void Configure( IApplicationBuilder soft, ILoggerFactory log ) {
			log.AddConsole( );
			soft.UseDeveloperExceptionPage( );
			soft.UseStaticFiles( );
			soft.UseSession( );
			soft.UseMvc( );
		}

	}
}



