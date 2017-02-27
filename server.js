var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-One' : {
    title : 'Article One | Ashwini',
    heading:'Article One',
    date :'8th Feb-17',
    content : `
                  <p>
                      This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                
                  </p>
                  
                   <p>
                       This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                 
                  </p>
                  
                   <p>
                       This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                 
                  </p>` },
    'article-Two' : {
          title : 'Article Two | Ashwini',
    heading:'Article Two',
    date :'16th Feb-17',
    content : `
                  <p>
                      This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                
                  </p>
                  
                   <p>
                       This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                 
                  </p>
                  
                   <p>
                       This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                 
                  </p>`
        
    },    
    'article-Three' : {   title : 'Article Three | Ashwini',
    heading:'Article Three',
    date :'27th Feb-17',
    content : `
                  <p>
                      This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                
                  </p>
                  
                   <p>
                       This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                 
                  </p>
                  
                   <p>
                       This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                  can you let me??This is the starting content used in the file.Hey let's add more to it and enjoy the fun of typing some nice things here..
                 
                  </p>`
    }
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    
    var htmlTemplate =`
 <html>
  <head>
    <title>${title}</title>
    <meta name = "viewport" content = "width=device-width, initial-scale=1" /> 
      <link href="/ui/style.css" rel="stylesheet" />
    
  </head>
  
  <body>
      <div class="container">
             <div> <a href ="/">Home</a></div>
             <hr/>
             <h3 style ="color: black;">${heading}</h3>
             <div style ="color: green;">${date} </div>
            <div>
                  ${content}
                 
                  </p>
            </div>
          
      </div>
      
      
  </body>

</html>

    
`;

return htmlTemplate;
    
}








app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName ==  articleOne
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
