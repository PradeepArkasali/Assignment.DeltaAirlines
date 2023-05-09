using DeltaAirlines.Assignment.WebAPI.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IStudentService, StudentServices>();
// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(setup => {
    setup.AddDefaultPolicy(policyBuilder => policyBuilder.WithOrigins("http://localhost:4200"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyHeader()
      .AllowAnyMethod()
      .AllowAnyOrigin());

app.UseAuthorization();

app.MapControllers();

app.Run();
