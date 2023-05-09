using DeltaAirlines.Assignment.WebAPI.Models;

namespace DeltaAirlines.Assignment.WebAPI.Services
{
    public class StudentServices : IStudentService
    {
        public List<Student> GetStudents()
        {
            return GetListOfStudents();
        }

        private List<Student> GetListOfStudents()
        {
            List<Student> students = new List<Student>()
            {
                new Student()
                {
                    Id = 1,
                    Age = 18,
                    Name = "Alice",
                    Hobbies = new List<string>() { "reading", "swimming", "coding" }
                },
                new Student()
                {
                    Id = 2,
                    Age = 22,
                    Name = "Bob",
                    Hobbies = new List<string>() { "painting", "dancing", "singing" }
                },
                new Student()
                {
                    Id = 3,
                    Age = 21,
                    Name = "John",
                    Hobbies = new List<string>() { "cricket", "poetry"}
                },
                new Student()
                {
                    Id = 4,
                    Age = 20,
                    Name = "Stev",
                    Hobbies = new List<string>() { "football", "swimming"}
                },
                new Student()
                {
                    Id = 5,
                    Age = 19,
                    Name = "Joanna",
                    Hobbies = new List<string>() { "cooking", "painting", "literature"}
                }
            };
           
            return students;
        }
    }
}
