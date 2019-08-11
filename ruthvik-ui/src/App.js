import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';


class App extends React.Component{


constructor(){
        super();
        this.state = {render:''}
    }

handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});        
    }

 _renderSubComp(){
        switch(this.state.render){
            case 'Prek4HighFreqWords': return <Prek4HighFreqWords/>
            case 'IdentifyNumbers' : return <IdentifyNumbers/>
        }
    }

render(){
   return (
            <div class="container-fluid">
              <div class="row content">
                <div style = {{borderRight: '1px solid grey',borderBottom: '1px solid grey'}} class="col-sm-2 sidenav">
                  <h4>Ruthviks study Items</h4>
                    <a href="#" onClick={this.handleClick.bind(this, 'Prek4HighFreqWords')}>Prek4HighFreqWords</a><br/>
                    <a href="#" onClick={this.handleClick.bind(this, 'IdentifyNumbers')}>IdentifyNumbers</a>
                </div>
                <div class="col-sm-10">
                  <div style={{textAlign:'center'}}> {this._renderSubComp()} </div>
                </div>
              </div>
            </div>

        )
}
}

export default App;

class Prek4HighFreqWords extends React.Component {

  constructor(){
        super();
        this.state = {words:['a','and','be','do','for','good','her','if','just','long','many','my','about','are','been','come','from','had','him','in','know','look','may','name','after','as','but','could','each','get','has','his','into','like',
                             'made','me','new','all','at','by','day','give','have','how','is','little','make','more','no','an','back','called','did','first','he','I','it','live','man','most','not','now','one','out','said','so','that','there','this','use','we','who','would','number','only','over','see','some','the','these','time','very','were','will','write','of','or','part','sentence','their','they','to','was','what','with','years','oil',
                             'other','people','she','take','them','things','two','water','when','words','you','on','our','place','sit','than','then','think','up','way','which','work','your'],
                      currentWord:'',
                      currentIndex:0}
        this.state.currentWord=this.state.words[0];
    }

   nextWord = () => {
      var tempCurrentIndex = this.state.currentIndex + 1;
      if(tempCurrentIndex < this.state.words.length){
         this.setState({currentIndex:tempCurrentIndex})
         this.setState({currentWord:this.state.words[tempCurrentIndex]})
      }else{
         this.setState({currentWord:this.state.words[0]})
         this.setState({currentIndex:0})  
      }
   }

    render(){
        return (
          <div>
            <div style={{paddingTop:'40px',color:'grey',fontSize:'70px'}}>
              {this.state.currentIndex+1}) {this.state.currentWord}<br></br>
            </div>
            <button onClick={this.nextWord}>Next</button>
          </div>
          );
    }
}




class IdentifyNumbers extends React.Component {
    render(){
        return (<div>Inside IdentifyNumbers</div>)
    }
}