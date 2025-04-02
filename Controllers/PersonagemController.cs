using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xablau.Data;
using Xablau.Models;

namespace Xablau.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonagemController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public PersonagemController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddPersonagem(Personagem personagem)
        {
            if (personagem == null) {
                return BadRequest("Dados inválidos!");
            }

            _appDbContext.XablauDB.Add(personagem);
            await _appDbContext.SaveChangesAsync();

            return StatusCode(201, personagem);
        }

        [HttpGet]
        public async Task<ActionResult <IEnumerable<Personagem>>> GetPersonagem()
        {
            var personagens = await _appDbContext.XablauDB.ToListAsync();

            return Ok(personagens);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Personagem>> GetPersonagem(int id)
        {
            var personagem = await _appDbContext.XablauDB.FindAsync(id);

            if (personagem == null) {
                return NotFound("Personagem não encontrado!");
            }

            return Ok(personagem);
        }
    }
}