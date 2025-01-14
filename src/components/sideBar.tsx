export default function sideBar(){

    return(

        <div style={{backgroundColor: '#E7D7A4', 
            height: '100%', 
            maxWidth: '250px',
            opacity:'0.95',
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            
        }}>
            <div style={
                {   color:'#A51F1F',
                    height: '80px',
                    maxWidth: '250px', 
                    fontSize:'27px',
                    padding:'1rem',
                    margin:'1rem'
                }
            }>NutriChef AI</div>

        </div>
    )
}