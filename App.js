import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cargos em TI</Text>
    <ScrollView>
      <Text style= {styles.txt}>Programador Junior</Text>
      <Text>Um programador júnior é um profissional iniciante ou com pouca experiência na área de desenvolvimento de software. Ele possui conhecimentos básicos em linguagens de programação e ferramentas de desenvolvimento, mas ainda está em processo de aprimoramento e aprendizado contínuo. Geralmente, o programador júnior trabalha sob a supervisão de profissionais mais experientes e está envolvido em tarefas como escrever código, testar sistemas, corrigir erros e realizar ajustes em projetos já existentes. Ele está em fase de adquirir habilidades técnicas e melhorar sua capacidade de resolver problemas mais complexos.</Text>
     <Image style= {styles.img} source={require('./assets/pj.jpg')}/>
     <Text style= {styles.txt}>Programador Pleno</Text>
      <Text>Um programador pleno é um profissional de desenvolvimento de software com experiência intermediária, geralmente entre 2 a 5 anos de carreira. Ele possui uma boa compreensão de várias tecnologias e frameworks, já consegue lidar com tarefas mais complexas de programação de forma independente e tem uma boa capacidade de resolução de problemas.</Text>
     <Image style= {styles.img} source={require('./assets/pp.jpg')}/>
     <Text style= {styles.txt}>Programador Senior</Text>
      <Text>Um programador sênior é um profissional experiente, geralmente com mais de 5 anos de carreira, que possui um alto nível de conhecimento técnico e é capaz de lidar com projetos complexos de forma autônoma. Ele tem uma compreensão profunda de várias tecnologias, frameworks e boas práticas de desenvolvimento, além de ser capaz de projetar, implementar e otimizar sistemas e soluções de grande escala.</Text>
     <Image style= {styles.img} source={require('./assets/ps.jpg')}/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  txt:{
    color: '#0000FF',
    marginTop: 20
  },

  img: {
    height: 200,
    width: 200,
 },
});
