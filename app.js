const express = require('express');
const port = 3000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb://localhost:27017/Nodeint?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully to mongoDB");
});


////---------------mongoose and mongo sanbox routes-----------------------------------
//route to save a blog
// app.get('/add-blog', async (req,res) =>{
//     const blog = new Blog({
//         title:"New blog 2",
//         snippet:'about my new blog',
//         body:'more about my new blog'
//     });

//     try {
//          const myblog = await blog.save();
//          res.send(myblog)
//       } 
//       catch (error) {
//           console.error(error.message);
//         res.status(404).send( () =>{
//             console.log("internal error")
//         })    
//       }
// })

// //route to show or find all blog
// app.get('/all-blog', async (req,res) =>{
//     try {
//         const allblogs = await Blog.find(); ;
//         res.send(allblogs)
//      } 
//      catch (error) {
//          console.error(error.message);
//          res.status(404).send( () =>{
//            console.log("internal error")
//           })    
//      } 
// })
// //route to find single blog
// app.get('/single-blog', async (req,res) =>{
//     try {
//         const blog = await Blog.findById('621e2778d448badfb92c8b4c'); ;
//         res.send(blog)
//      } 
//      catch (error) {
//          console.error(error.message);
//          res.status(404).send( () =>{
//            console.log("internal error")
//           })    
//      } 
// })

//------------listen for request
// app.get('/', (req,res) =>{
//     res.send('<h1>Say lalisa love me index page </h1>');
// })

// app.get('/about', (req,res) =>{
//     res.send('<h1>About me page</h1>');
// })

//--------- //redirect
// app.get('/about-us',(req,res) =>{
//     res.redirect('/about')
// })

// -------------//default or no routing
// app.use((req,res) =>{
//     res.send('<h1>error </h1>');
// })


////------------now listening for files 

// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', { root: __dirname })
// })

// app.get('/about', (req, res) => {
//     res.sendFile('./views/about.html', { root: __dirname })
// })

// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname })
// })

// app.listen(port, () => {
//     console.log("Listning on port number " + port)
// })

////--------------------register view engine
// listning requests in ejs format use res.render() to render files
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.get('/about', (req, res) => {
//     res.render('about');
// })

// app.get('/blogs/create', (req, res) => {
//     res.render('create');
// })

// app.use((req, res) => {
//     res.status(404).render('404')
// })

// app.set('view engine', 'ejs');
//---------------middleware 
// app.use((req,res,next) =>{
//    console.log('new request made: ');
//    console.log('host: ',req.hostname);
//    console.log('path: ',req.path);
//    console.log('method: ',req.method);
//    next();
// })

// app.use((req,res,next) =>{
//     console.log('in the next middleware');
//     next();
//  })



// app.set('view engine', 'ejs');

// app.use(express.static('public'));
// app.use(morgan('dev'));

// //routes
// app.get('/', (req, res) => {
//     const blogs = [
//         { title: 'Nancy loves Nishant', snippet: 'lorem ipensku  cjk mbfff' },
//         { title: 'Nishant loves Nancy', snippet: 'lorem ipensku  cjk mbfff' },
//         { title: 'Say lalisa love me', snippet: 'lorem ipensku  cjk mbfff' },
//     ];
//     res.render('index', { title: 'Home', blogs });
// });

// app.get('/about', (req, res) => {
//     res.render('about', { title: 'About' });
// })

// app.get('/blogs/create', (req, res) => {
//     res.render('create', { title: 'Create New Blog' });
// })

// app.use((req, res) => {
//     res.status(404).render('404', { title: 'Error' })
// })
// app.listen(port, () => {
//     console.log("Listning on port number " + port)
// })

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

//blog routes
app.use('/blogs',blogRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' })
})

app.listen(port, () => {
    console.log("Listning on port number " + port)
})