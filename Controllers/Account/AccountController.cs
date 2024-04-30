using Microsoft.AspNetCore.Mvc;
using HomeCarePro.Models;
using System.ComponentModel.DataAnnotations;
using HomeCarePro.Models.ViewModel;

namespace HomeCarePro.Controllers.Account
{
    public class AccountController : Controller
    {   
        public IActionResult login()
        {

            return View();
        }
        [HttpPost]
        public IActionResult login(LoginSignUpViewModel model) => View();
        public IActionResult signup()
        {

            return View();
        }
        [HttpPost]
        public IActionResult signup(LoginSignUpViewModel model) => View();

    }
}
