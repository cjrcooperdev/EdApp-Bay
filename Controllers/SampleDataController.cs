using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace EdApp_Project.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Auction> Auctions()
        {
            return AuctionsData;
        }

        private List<Auction> AuctionsData = new List<Auction>{
            new Auction{ Id = 1, Item = "Interdimensional Goggles", Description = "See what could of been.", ImageName = "interdimensional_goggles.png", StartingPrice = 75.0m,  Bids = 2, CurrentBid = 35.0m, Sold = false },
            new Auction{ Id = 2, Item = "Meeseeks Box", Description = "I'm Mr Meeseeks! Look at me!", ImageName = "meeseeks_box.png", StartingPrice = 1500.0m,  Bids = 3, CurrentBid = 35.0m, Sold = false},
            new Auction{ Id = 3, Item = "Butter Robot", Description = "It's purpose? To pass the butter!", ImageName = "butter_robot.png", StartingPrice = 50.0m,  Bids = 5, CurrentBid = 35.0m, Sold = false},
            new Auction{ Id = 4, Item = "Time Crystal", Description = "It does something with time, not sure what exactly but yeah... it's time", ImageName = "time_crystal.png", StartingPrice = 300.0m,  Bids = 17, CurrentBid = 35.0m, Sold = false},
            new Auction{ Id = 5, Item = "Microverse Battery", Description = "Power your car or whatever with this Microverse Battery!", ImageName = "microverse_battery.png", StartingPrice = 800.0m,  Bids = 53, CurrentBid = 35.0m, Sold = false},
            new Auction{ Id = 6, Item = "Time Stabilizing Collar", Description = "Sync up your time when it splits!", ImageName = "time_stabilizing_collar.png", StartingPrice = 35.0m,  Bids = 1, CurrentBid = 35.0m, Sold = false},
        };

        public class Auction
        {
            public int Id { get; set; }
            public string Item { get; set; }
            public string Description { get; set;}
            public string ImageName { get; set; }
            public decimal StartingPrice { get; set; }
            public int Bids { get; set; }
            public decimal CurrentBid { get; set; }
            public bool Sold { get; set; }
            public int Expiration  {get; set;}

            public Auction () {
                Expiration = setRandomExpiration();
            }
        }

        private static int setRandomExpiration() {
            var randomExpiration = new Random();
            return randomExpiration.Next(30, 60);
        }
    }
}
