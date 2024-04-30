using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeCarePro.Models.ViewModel
{
    public class LoginSignUpViewModel
    {
        public  string usersid { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public bool isactive { get; set; }
    }
}
