import React, { Component } from 'react'

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  CodePane,
  Quote,
  Slide,
  Text
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')

const images = {
  theoremHalmos: require('../assets/theorem-halmos.svg'),
  theoremLogoType: require('../assets/theorem-logotype.svg'),
}

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme} >
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Git Metaphors and Stuff
          </Heading>
          <hr />
          <Heading size={5} caps textColor="tertiary" style={{marginBottom: 50}}>
            Jordan Papaleo
          </Heading>
          <Text size={1} textColor="quaternary">
            Software Engineer
            <Image src={images.theoremLogoType} width={400} />
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} caps textColor="secondary">
            Vocab
          </Heading>
          <List>
            <ListItem>
              <strong style={{color: 'white'}}>repository:</strong> <br />
              a cool place to store cool things
            </ListItem>
            <ListItem>
              <strong style={{color: 'white'}}>version control:</strong><br />
              Its a snapshot, its like a photograph of your cool things at a point time. When you combine all of these snapshots together you will have the complete story of why your cool things are soooo cool... or why they are not <em>#gitblame</em>
            </ListItem>
            <ListItem>
              <strong style={{color: 'white'}}>git:</strong><br />
              this is a type of version control.  there are others, but we like git the best
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="quaternary" transition={['fade']}>
          <Heading size={2} style={{marginBottom: 50}}>
            Climbing
          </Heading>
          <BlockQuote>
            <Quote style={{fontSize: 48, marginBottom: 25}}>Disclaimer: I am not a climber and dont know all the cool phrase, but I know a few climbers</Quote>
            <Cite margin="10px 0 0 30px">Jordan Papaleo</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="tertiary" transition={['fade']} textColor="secondary">
          <Heading size={4}>
            From what I have observed about climbing:
          </Heading>

          <List>
            <ListItem>
              someone looks at the cliff infront of them and determines the best way to ascend it
            </ListItem>
            <ListItem>
              this involves exploration and and probably multiple attemps
            </ListItem>
            <ListItem>
              once a person gits to a good spot, they drill a little hole, stick something in it, add some cool safety stuff, and commit their equipment to that point
            </ListItem>
            <ListItem>
              if they git to a bad spot on their climb, they can reset back to the previous commit on the cliff
            </ListItem>
            <ListItem>
              if they git really stuck, this may mean going down past a few commit points
            </ListItem>
            <ListItem>
              and from what I can tell, the more of these little commit spots you have the safer you will be if you fall
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary" transition={['fade']}>
          <Heading textColor="tertiary" size={2} style={{marginBottom: 50}}>
            Lesson 1
          </Heading>

          <Text textColor="quaternary">
            Commit often and wear<br /> a helmet in case you fall
          </Text>
        </Slide>

        <Slide bgColor="quaternary" transition={['fade']}>
          <Heading size={2} style={{marginBottom: 50}}>
            Story Telling
          </Heading>
          <BlockQuote>
            <Quote style={{fontSize: 48, marginBottom: 25}}>Disclaimer: I do have young kids and have told a few stories</Quote>
            <Cite margin="10px 0 0 30px">Jordan Papaleo</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="tertiary" transition={['fade']} textColor="secondary">
          <Heading size={4}>
            From what I know about story telling:
          </Heading>

          <List>
            <ListItem>
              story telling is not the same as reading a novel, its much faster
            </ListItem>
            <ListItem>
              kids and developers tend to git distracted easily
            </ListItem>
            <ListItem>
              story telling has to be clear, concise, and purposeful
            </ListItem>
            <ListItem>
              story telling has to be clear, concise, and purposeful
            </ListItem>
            <ListItem>
              when telling a story, share the important details, leave out the junk, and make animal sounds when animals talk
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary" transition={['fade']}>
          <Heading size={2} style={{marginBottom: 50}} textColor="tertiary">
            Lesson 2
          </Heading>

          <Text textColor="quaternary">
            No one is interested in a story<br />that doesnt make sense and probably<br />won't want to hear it
          </Text>
        </Slide>

        <Slide bgColor="quaternary" transition={['fade']}>
          <Heading textColor="primary" size={2} style={{marginBottom: 50}}>
            Bring it together
          </Heading>

          <Text textAlign="left">As a developer we climb cliffs and tell stories with our repo history</Text>
          <Text textAlign="left">Make as many commits as you need to safely navigate you feature or whatevs</Text>
          <Text textAlign="left">After you get to the top, make sure you tell a story that people can benifit from</Text>
        </Slide>

        <Slide bgColor="tertiary" transition={['fade']}>
          <Heading size={2} textColor="secondary">
            Interactive Rebase Demo
          </Heading>

        </Slide>
      </Deck>
    )
  }
}

