export default function RecipeGenerate(){

    return(

        <div style={{
            
            height:'100%',
            width:'40%',
            padding:'1rem',
            margin:'3rem',
            display:'flex',
            flexDirection: 'column',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
            <div style={{
                backgroundColor:'#E7D7A4',
                opacity:'0.95',
                padding: '1rem',
                margin: '1rem',
                width:'100%',
                height:'100%',
                maxHeight:'90px',
                borderRadius:'15px'
            }}>
            prompt
            </div>

            <div style={{
                backgroundColor:'#E7D7A4',
                opacity:'0.95',
                padding: '1rem',
                margin: '1rem',
                width:'100%',
                height:'100%',
                maxHeight:'625px',
                borderRadius:'15px'
            }}>
                
                <div style={{
                    display:'flex',
                    justifyContent: 'space-between'
                }}> 
                    <div style={{
                        padding: '0.25rem',
                        margin: '0.25rem',
                    }}>LEGUMES REFOGADOS</div>

                    <div style={{
                        color:'white',
                        padding: '0.25rem',
                        margin: '0.25rem',
                        borderRadius:'15px',
                        backgroundColor: 'black',
                        width:'150px',
                        height:'150px',
                        

                    }}>IMAGEM GERADA</div>
                </div>

                
            </div>

        </div>
    )
}