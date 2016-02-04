using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CodeWars.Startup))]
namespace CodeWars
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
