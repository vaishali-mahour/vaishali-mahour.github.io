
    $(function(){
        $("#addblog").click(function(){
        var blog_picture = prompt("Enter the blog image url");
        var blog_title = prompt("Enter the blog title");
        var user_name = prompt("Enter the user name");
        var user_image = prompt("Enter the user's image url");
        $t1=$("#clonecard").clone();
        $("#pic",$t1).attr("src",blog_picture);
        $("#title",$t1).text(blog_title);
        $("#name",$t1).text(user_name);
        $("#userimg",$t1).css("background-image",user_image);
        $t1.appendTo(".row-deck");
    });
    });