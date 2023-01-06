import  express  from "express";
import dotenv from 'dotenv';
import mustache from "mustache-express";
import path from "path";

//rotas
import mainRoutes from './routes/index'
import router from "./routes/index";


dotenv.config();
 
const server =  express()

// Templete engine configuration 
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Pasta publica do css
server.use(express.static(path.join(__dirname, '../public')));

//rotas
server.use(mainRoutes);

server.use((req , res) => {
    res.render('pages/404');
});



server.listen(process.env.PORT);