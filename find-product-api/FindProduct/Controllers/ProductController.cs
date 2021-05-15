using FindProduct.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindProduct.Marketler;

namespace FindProduct.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpPost("{product}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Get(string product)
        {
            var model = new List<Product>();
            List<Market> markets = new() 
            {
                new MarketA101 { SearchText = product },
                new MarketBizim { SearchText = product },
                new MarketCagri { SearchText = product },
                new MarketHakmar { SearchText = product },
                new MarketMopas { SearchText = product },
                new MarketHappyCenter { SearchText = product }

            };

            List<Task> taskList = markets.Select(market => new Task(market.LoadProducts)).ToList();

            taskList.ForEach(t => t.Start());
            await Task.WhenAll(taskList);
            markets.ForEach(market => model.AddRange(market.Products));
            return Ok(model);
        }
    }
}
