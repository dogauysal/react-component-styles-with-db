This project is an example that shows how to change style without doing any deployment in React. 
Components can also be re-ordered from database. 

How it works?

1. Open db.json to add/edit/remove style
2. activeStyleNames: If you define new style in the project, you must add it to activeStyleNames property in order to see its effect on the website
3. allStyles: Every style that is defined in activeStyleNames must be added to this section. For now, project only supports id,class and element types. 
4. componentOrder: components can be reordered and its type can be changed. More than one property can be added.


To start project on your local pc,  please execute following commands on the command prompt.

project: http://localhost:3000  (npm start)
db: http://localhost:3001   (npm run db)


