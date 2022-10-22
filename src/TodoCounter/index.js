import React from "react";
import './TodoCounter.css';

// const estilos= {
//     color: 'red',
//     backgroundColor: 'yellow',
// };

// function TodoCounter() {
//     return (
//         <h2 style={estilos}>Has completado 2 de 3 TODOS</h2>
//     );
// }

function TodoCounter({total, completed}) {
    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOS</h2>
    );
}

export { TodoCounter };