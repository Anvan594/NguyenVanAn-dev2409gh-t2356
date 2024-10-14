namespace Lap01_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //khai báo biến
            int id = 1;
            string name = "Văn An";
            byte age = 45;
            char gender = 'M';
            // khai báo biến hàng
            const float percent = 75.5f;
            //hiển thị giá trị
            Console.OutputEncoding=System.Text.Encoding.UTF8;
            Console.WriteLine("Mã số: {0}",id);
            Console.WriteLine("Tên: {0}", name);
            Console.WriteLine("Tuổi: {0}", age);
            Console.WriteLine("Giới tính: {0}", gender);
            Console.WriteLine("percent: {0}", percent);

        }
    }
}
