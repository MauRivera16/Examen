using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using RestSharp;
using System.Configuration;

namespace Examen.aplicacion.Webmethods
{
    /// <summary>
    /// Descripción breve de Servicios
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class Servicios : System.Web.Services.WebService
    {
        [WebMethod]
        public string ConsultarClima(string lugar, int dias)
        {
            System.Net.ServicePointManager.SecurityProtocol = (System.Net.SecurityProtocolType)3072;
            string urlClima = ConfigurationManager.AppSettings["urlClima"];
            string host = ConfigurationManager.AppSettings["Host"];
            string key = ConfigurationManager.AppSettings["Key"];
            RestClient cliente = new RestClient(urlClima + lugar + "&days=" + dias + "&lang=es");
            RestRequest peticion = new RestRequest(Method.GET);
            peticion.AddHeader("x-rapidapi-host", host);
            peticion.AddHeader("x-rapidapi-key", key);
            IRestResponse respuesta = cliente.Execute(peticion);

            return respuesta.Content;
        }

        [WebMethod]
        public string ConsultarDeporte(string lugar)
        {
            System.Net.ServicePointManager.SecurityProtocol = (System.Net.SecurityProtocolType)3072;
            string urlDeporte = ConfigurationManager.AppSettings["urlDeporte"];
            string host = ConfigurationManager.AppSettings["Host"];
            string key = ConfigurationManager.AppSettings["Key"];
            RestClient cliente = new RestClient(urlDeporte + lugar + "&lang=es");
            RestRequest peticion = new RestRequest(Method.GET);
            peticion.AddHeader("x-rapidapi-host", host);
            peticion.AddHeader("x-rapidapi-key", key);
            IRestResponse respuesta = cliente.Execute(peticion);
            return respuesta.Content;
        }

    }
}
