var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg",  "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/GmN6QJkk/maxresdefault-1493365193.jpg", "https://image.shutterstock.com/z/stock-vector-an-indian-fat-old-happy-grandmother-wearing-a-saree-is-standing-with-a-stick-in-her-hand-for-1233826615.jpg ","https://media.istockphoto.com/photos/ethnic-grandfather-looking-at-camera-picture-id1184602013?k=20&m=1184602013&s=612x612&w=0&h=-xekyQkeThQaaHhb-bs--FH8FwSpYLl5tkSg2jQfZCU="  ];
var names = ["Family Book","Vishnu Sivadas", "Kamya Pillai", " Karthik Vishnu", "Kedaar Vishnu", "Sivadas Sukumaran", "Jayasre Sivadas", "Sasikala Pillai", "Sasidharan Pillai"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
