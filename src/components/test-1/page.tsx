'use client'
import useCart from '@/hooks/useCart'
import React from 'react'
import ListItem from '../common/ListItem'

// I will move to components folder
// const ListItem = React.memo((props) => {
//   const { id, name, quantity, handleRemoveQuantity, handleAddQuantity } = props
//   return (
//       <li key={id}>
//           <p>{name}</p>
//           <p role="timer">{new Date().getTime()}</p>
//           <button
//               aria-label={`item-${id}-remove`}
//               onClick={() => handleRemoveQuantity(id)}
//           >
//               -1
//           </button>
//           <span>{quantity}</span>
//           <button
//               aria-label={`item-${id}-add`}
//               onClick={() => handleAddQuantity(id)}
//           >
//               +1
//           </button>
//       </li>
//   );
// });

// ListItem.displayName = 'ListItem'

export default function Home() {
    const { cart, handleAddQuantity, handleRemoveQuantity } = useCart()

    // If you wont use the useCallback hook, the function will change reference
    // and the ListItem will be re-rendered
    const handleAdd = React.useCallback((id: number) => {
      handleAddQuantity(id)
    }, [])

    // If you wont use the useCallback hook, the function will change reference
    // and the ListItem will be re-rendered
    const handleRemove = React.useCallback((id: number) => {
      handleRemoveQuantity(id)
    }, [])

    return (
        <main>
            <h1>Hook App</h1>
            <ul>
              {cart.map((item) => (
                    <ListItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        handleRemoveQuantity={handleRemove}
                        handleAddQuantity={handleAdd}
                    />
                ))}
            </ul>
        </main>
    )
}

// export default function HomeFail() {
//     const { cart, handleAddQuantity, handleRemoveQuantity } = useCart()

//     return (
//         <main>
//             <h1>Hook App</h1>
//             <ul>
//             {cart.map((item) => {
//                     const { id, name, quantity } = item
//                     return (
//                         <li key={id}>
//                             <p>{name}</p>
//                             <p role="timer">{new Date().getTime()}</p>
//                             <button
//                                 aria-label={`item-${id}-remove`}
//                                 onClick={() => handleRemoveQuantity(id)}
//                             >
//                                 -1
//                             </button>
//                             <span>{quantity}</span>
//                             <button
//                                 aria-label={`item-${id}-add`}
//                                 onClick={() => handleAddQuantity(id)}
//                             >
//                                 +1
//                             </button>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </main>
//     )
// }