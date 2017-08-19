﻿



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

		// May need additional customization
		public Startup( IConfiguration schema ) { Schema = schema; }

		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices( IServiceCollection ops ) {
			ops.AddMvc( );
			ops.AddSession( );
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure( IApplicationBuilder soft, IHostingEnvironment zone ) {
			// Secrets that only I can see
			if ( zone.IsDevelopment( ) ) { soft.UseDeveloperExceptionPage( ); }
			// Yup, it's empty...
			else {  }
			//soft.Run( async ( context ) => { await context.Response.WriteAsync( "Hahaha you can't see anything! " ); } );
			soft.UseStaticFiles( );
			soft.UseSession( );
			soft.UseMvc( );
		}

	}
}



