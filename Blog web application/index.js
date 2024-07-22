import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

let app = express();
let port = 3000;
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



let blogPost = [
    {
        title: "What is Wireframing?",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        blogText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum, quae modi similique deserunt nobis qui incidunt? Suscipit corporis, numquam assumenda obcaecati nobis accusantium iure accusamus aspernatur amet perferendis laborum aliquid modi magnam labore ut architecto provident sequi beatae molestiae delectus sed. Eos, quaerat ipsum nulla minima quia soluta similique ad illo pariatur porro voluptatibus fugiat consequatur! Excepturi dolor labore vel ab sapiente quibusdam odio eveniet nam aliquam quod, reprehenderit cum explicabo exercitationem iste facere tempora quas? Placeat mollitia iusto labore commodi fugit harum necessitatibus aut molestias amet aperiam, modi nemo eius accusamus molestiae suscipit ea officia blanditiis voluptates quis nulla iure provident! Nihil vel, vero rerum magni architecto natus at in earum impedit, maiores modi cupiditate culpa, excepturi explicabo a officia est blanditiis exercitationem accusamus. Nesciunt vel magnam repellendus tempore cumque explicabo! Incidunt necessitatibus deleniti perferendis veritatis qui est, ab, cum praesentium explicabo officia minima? Dolorum voluptatibus debitis suscipit consequuntur? Molestiae omnis animi excepturi corporis, exercitationem in explicabo vitae impedit quisquam dolore modi adipisci soluta asperiores unde provident assumenda. A architecto esse deleniti eveniet similique numquam consequuntur recusandae, facilis necessitatibus ipsam laborum quasi quibusdam maxime eaque totam. Distinctio aliquam, dolor accusantium possimus ut praesentium expedita nostrum voluptates laboriosam ullam unde eos debitis inventore assumenda est quam! Exercitationem ipsum ut odit aperiam at, explicabo veritatis facere nobis aut mollitia rem eum architecto. Aperiam fugit ea odio quam rerum sapiente labore aliquam soluta magni quod ullam possimus sed aspernatur perferendis a animi consequatur neque recusandae quae, velit dicta! Laborum excepturi nihil nostrum explicabo pariatur harum possimus commodi ipsam, ratione iste tempora facilis sapiente quidem molestiae nesciunt id odio cum exercitationem dicta quas, quam doloremque, inventore vero veritatis. Quasi deserunt culpa ex error? Non quos, illum tempore veniam sed, exercitationem placeat dolorem blanditiis atque veritatis nihil alias sit dolor voluptate reprehenderit et culpa. Dolorum eligendi perferendis suscipit minima animi necessitatibus nobis quia consectetur tempore voluptate, ipsa iusto iure esse. Doloremque similique magnam corporis veniam accusamus, a magni recusandae eligendi quasi excepturi debitis vel, possimus eius voluptates dolores? Praesentium accusamus molestias quas aspernatur, nostrum doloremque qui eaque similique alias dignissimos culpa voluptatem hic molestiae nulla fugiat. Id aliquid inventore tempore nostrum, soluta, quas iusto aspernatur asperiores placeat temporibus ratione cupiditate atque corporis ea rerum reiciendis, veritatis eius consequuntur voluptate quos tempora. Unde ipsum ab eum ipsa deleniti earum distinctio, id porro optio aut quasi autem quam, nemo inventore non veritatis qui laborum! Ipsum vitae voluptates quidem voluptate magnam, voluptas voluptatum libero quasi. Iste, cupiditate nihil placeat quae vero rem sint sapiente aliquam dolorum deleniti! Nulla autem consequuntur sint ab architecto dolor quidem optio saepe alias ad. Nam ducimus quia sint iure ex minima et dolorem ea eligendi hic dicta libero voluptate in, iusto tenetur dolorum aspernatur molestiae? Odit fugiat beatae doloribus dolorem aliquam rem fugit. Repudiandae sint alias earum impedit dolore! Cum sed nostrum maxime obcaecati in impedit adipisci harum repellendus quas voluptas voluptatum voluptatibus dignissimos voluptates ut explicabo quis voluptate natus cupiditate odit, inventore incidunt! Nobis id ipsum aliquid minus unde cumque!",
        date: "10 May 2024",
        imageUrl: "images/Image1.png"
    },
    {
        title: "How collaboration makes us better designers",
        description: "Collaboration can make our teams stronger, and our individual designs better.",
        blogText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum, quae modi similique deserunt nobis qui incidunt? Suscipit corporis, numquam assumenda obcaecati nobis accusantium iure accusamus aspernatur amet perferendis laborum aliquid modi magnam labore ut architecto provident sequi beatae molestiae delectus sed. Eos, quaerat ipsum nulla minima quia soluta similique ad illo pariatur porro voluptatibus fugiat consequatur! Excepturi dolor labore vel ab sapiente quibusdam odio eveniet nam aliquam quod, reprehenderit cum explicabo exercitationem iste facere tempora quas? Placeat mollitia iusto labore commodi fugit harum necessitatibus aut molestias amet aperiam, modi nemo eius accusamus molestiae suscipit ea officia blanditiis voluptates quis nulla iure provident! Nihil vel, vero rerum magni architecto natus at in earum impedit, maiores modi cupiditate culpa, excepturi explicabo a officia est blanditiis exercitationem accusamus. Nesciunt vel magnam repellendus tempore cumque explicabo! Incidunt necessitatibus deleniti perferendis veritatis qui est, ab, cum praesentium explicabo officia minima? Dolorum voluptatibus debitis suscipit consequuntur? Molestiae omnis animi excepturi corporis, exercitationem in explicabo vitae impedit quisquam dolore modi adipisci soluta asperiores unde provident assumenda. A architecto esse deleniti eveniet similique numquam consequuntur recusandae, facilis necessitatibus ipsam laborum quasi quibusdam maxime eaque totam. Distinctio aliquam, dolor accusantium possimus ut praesentium expedita nostrum voluptates laboriosam ullam unde eos debitis inventore assumenda est quam! Exercitationem ipsum ut odit aperiam at, explicabo veritatis facere nobis aut mollitia rem eum architecto. Aperiam fugit ea odio quam rerum sapiente labore aliquam soluta magni quod ullam possimus sed aspernatur perferendis a animi consequatur neque recusandae quae, velit dicta! Laborum excepturi nihil nostrum explicabo pariatur harum possimus commodi ipsam, ratione iste tempora facilis sapiente quidem molestiae nesciunt id odio cum exercitationem dicta quas, quam doloremque, inventore vero veritatis. Quasi deserunt culpa ex error? Non quos, illum tempore veniam sed, exercitationem placeat dolorem blanditiis atque veritatis nihil alias sit dolor voluptate reprehenderit et culpa. Dolorum eligendi perferendis suscipit minima animi necessitatibus nobis quia consectetur tempore voluptate, ipsa iusto iure esse. Doloremque similique magnam corporis veniam accusamus, a magni recusandae eligendi quasi excepturi debitis vel, possimus eius voluptates dolores? Praesentium accusamus molestias quas aspernatur, nostrum doloremque qui eaque similique alias dignissimos culpa voluptatem hic molestiae nulla fugiat. Id aliquid inventore tempore nostrum, soluta, quas iusto aspernatur asperiores placeat temporibus ratione cupiditate atque corporis ea rerum reiciendis, veritatis eius consequuntur voluptate quos tempora. Unde ipsum ab eum ipsa deleniti earum distinctio, id porro optio aut quasi autem quam, nemo inventore non veritatis qui laborum! Ipsum vitae voluptates quidem voluptate magnam, voluptas voluptatum libero quasi. Iste, cupiditate nihil placeat quae vero rem sint sapiente aliquam dolorum deleniti! Nulla autem consequuntur sint ab architecto dolor quidem optio saepe alias ad. Nam ducimus quia sint iure ex minima et dolorem ea eligendi hic dicta libero voluptate in, iusto tenetur dolorum aspernatur molestiae? Odit fugiat beatae doloribus dolorem aliquam rem fugit. Repudiandae sint alias earum impedit dolore! Cum sed nostrum maxime obcaecati in impedit adipisci harum repellendus quas voluptas voluptatum voluptatibus dignissimos voluptates ut explicabo quis voluptate natus cupiditate odit, inventore incidunt! Nobis id ipsum aliquid minus unde cumque!",
        date: "10 May 2024",
        imageUrl: "images/Image2.png"
    },
    {
        title: "Our top 10 Javascript frameworks to use",
        description: "JavaScript frameworks make development easy with extensive features and functionalities.",
        blogText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum, quae modi similique deserunt nobis qui incidunt? Suscipit corporis, numquam assumenda obcaecati nobis accusantium iure accusamus aspernatur amet perferendis laborum aliquid modi magnam labore ut architecto provident sequi beatae molestiae delectus sed. Eos, quaerat ipsum nulla minima quia soluta similique ad illo pariatur porro voluptatibus fugiat consequatur! Excepturi dolor labore vel ab sapiente quibusdam odio eveniet nam aliquam quod, reprehenderit cum explicabo exercitationem iste facere tempora quas? Placeat mollitia iusto labore commodi fugit harum necessitatibus aut molestias amet aperiam, modi nemo eius accusamus molestiae suscipit ea officia blanditiis voluptates quis nulla iure provident! Nihil vel, vero rerum magni architecto natus at in earum impedit, maiores modi cupiditate culpa, excepturi explicabo a officia est blanditiis exercitationem accusamus. Nesciunt vel magnam repellendus tempore cumque explicabo! Incidunt necessitatibus deleniti perferendis veritatis qui est, ab, cum praesentium explicabo officia minima? Dolorum voluptatibus debitis suscipit consequuntur? Molestiae omnis animi excepturi corporis, exercitationem in explicabo vitae impedit quisquam dolore modi adipisci soluta asperiores unde provident assumenda. A architecto esse deleniti eveniet similique numquam consequuntur recusandae, facilis necessitatibus ipsam laborum quasi quibusdam maxime eaque totam. Distinctio aliquam, dolor accusantium possimus ut praesentium expedita nostrum voluptates laboriosam ullam unde eos debitis inventore assumenda est quam! Exercitationem ipsum ut odit aperiam at, explicabo veritatis facere nobis aut mollitia rem eum architecto. Aperiam fugit ea odio quam rerum sapiente labore aliquam soluta magni quod ullam possimus sed aspernatur perferendis a animi consequatur neque recusandae quae, velit dicta! Laborum excepturi nihil nostrum explicabo pariatur harum possimus commodi ipsam, ratione iste tempora facilis sapiente quidem molestiae nesciunt id odio cum exercitationem dicta quas, quam doloremque, inventore vero veritatis. Quasi deserunt culpa ex error? Non quos, illum tempore veniam sed, exercitationem placeat dolorem blanditiis atque veritatis nihil alias sit dolor voluptate reprehenderit et culpa. Dolorum eligendi perferendis suscipit minima animi necessitatibus nobis quia consectetur tempore voluptate, ipsa iusto iure esse. Doloremque similique magnam corporis veniam accusamus, a magni recusandae eligendi quasi excepturi debitis vel, possimus eius voluptates dolores? Praesentium accusamus molestias quas aspernatur, nostrum doloremque qui eaque similique alias dignissimos culpa voluptatem hic molestiae nulla fugiat. Id aliquid inventore tempore nostrum, soluta, quas iusto aspernatur asperiores placeat temporibus ratione cupiditate atque corporis ea rerum reiciendis, veritatis eius consequuntur voluptate quos tempora. Unde ipsum ab eum ipsa deleniti earum distinctio, id porro optio aut quasi autem quam, nemo inventore non veritatis qui laborum! Ipsum vitae voluptates quidem voluptate magnam, voluptas voluptatum libero quasi. Iste, cupiditate nihil placeat quae vero rem sint sapiente aliquam dolorum deleniti! Nulla autem consequuntur sint ab architecto dolor quidem optio saepe alias ad. Nam ducimus quia sint iure ex minima et dolorem ea eligendi hic dicta libero voluptate in, iusto tenetur dolorum aspernatur molestiae? Odit fugiat beatae doloribus dolorem aliquam rem fugit. Repudiandae sint alias earum impedit dolore! Cum sed nostrum maxime obcaecati in impedit adipisci harum repellendus quas voluptas voluptatum voluptatibus dignissimos voluptates ut explicabo quis voluptate natus cupiditate odit, inventore incidunt! Nobis id ipsum aliquid minus unde cumque!",
        date: "10 May 2024",
        imageUrl: "images/Image3.png"
    }
];

app.get("/", (req,res) => {
    res.render("index.ejs", {blogPost});
});

app.get("/create", (req,res) => {
    res.render("create.ejs");
});

app.post("/", (req,res)=>{
    blogPost.push({
        title: req.body.title,
        description: req.body.description,
        blogText: req.body.blogtext,
        date: `${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getFullYear()}`,
        imageUrl: "images/Image3.png"
    });
    res.locals=blogPost;
    res.redirect("/");
    blogPost.forEach(element => {
        app.get(`/post${blogPost.indexOf(element)}`, (req,res)=>{
            let postIndex = blogPost.indexOf(element);
            res.render("post.ejs", {blogPost, postIndex});
        });
    });
});

blogPost.forEach(element => {
    app.get(`/post${blogPost.indexOf(element)}`, (req,res)=>{
        let postIndex = blogPost.indexOf(element);
        res.render("post.ejs", {blogPost, postIndex});
    });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});