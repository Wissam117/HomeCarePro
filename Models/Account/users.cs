using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace HomeCarePro.Models.Account
{
    public class users
    {
        [Key]
        public string usersid { get; set; }
        public required string username { get; set; }
        public required string password { get; set; }
        public bool isactive { get; set; }

    }
}
