import {Cards} from "./Cards"

export const CardList = () =>{
    const infoCards = [
                    {
                        image: "https://passionchalets.com/wp-content/uploads/2024/07/plage-lac-simon-500x325.jpg",
                        title: "Card title",
                        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur."
                    },
                    {
                        image: "https://passionchalets.com/wp-content/uploads/2024/07/papineau-labelle2-500x325.jpg",
                        title: "Card title",
                        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur." 
                    },
                    {
                        image: "https://passionchalets.com/wp-content/uploads/2024/05/8642725449_fa5f1b6e9a_b-500x325.jpg",
                        title: "Card title",
                        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur."
                    },
                    {
                        image: "https://passionchalets.com/wp-content/uploads/2024/05/parc-national-bic-automne-1-entete-500x325.jpg",
                        title: "Card title",
                        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur."
                    },
    ]
    

    return (
        <div className="container">
        <div className="row">
            {
                infoCards.map((iterador, index) => {
                    return (
                        <Cards
                            key={index}
                            cardDetail={iterador}
                        />
                    )
                })

            }




        </div>
    </div>
    )

}
