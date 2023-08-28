import React from 'react'
import classes from './style.module.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
  import { BsChevronDown } from "react-icons/bs";

function FAQ() {
  return (
    <section className={classes.FAQ}>
    <h2>Frequently asked</h2>
    <Accordion allowZeroExpanded>
    <AccordionItem className={classes.accordionItem}>
      <AccordionItemHeading className={classes.accordionHeading}>
        <AccordionItemButton className={classes.accordionButton}>
          What harsh truths do you prefer to ignore? <BsChevronDown />
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={classes.accordionPanel}>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
          occaecat ut occaecat consequat est minim minim esse tempor laborum
          consequat esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem className={classes.accordionItem}>
      <AccordionItemHeading className={classes.accordionHeading}>
        <AccordionItemButton className={classes.accordionButton}>
          What harsh truths do you prefer to ignore? <BsChevronDown />
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={classes.accordionPanel}>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
          occaecat ut occaecat consequat est minim minim esse tempor laborum
          consequat esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem className={classes.accordionItem}>
      <AccordionItemHeading className={classes.accordionHeading}>
        <AccordionItemButton className={classes.accordionButton}>
          What harsh truths do you prefer to ignore? <BsChevronDown />
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={classes.accordionPanel}>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
          occaecat ut occaecat consequat est minim minim esse tempor laborum
          consequat esse adipisicing eu reprehenderit enim. Exercitation in
          fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
          consequat est minim minim esse tempor laborum consequat esse
          adipisicing eu reprehenderit enim. Exercitation in fugiat est ut
          ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est
          minim minim esse tempor laborum consequat esse adipisicing eu
          reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem className={classes.accordionItem}>
      <AccordionItemHeading className={classes.accordionHeading}>
        <AccordionItemButton className={classes.accordionButton}>
          What harsh truths do you prefer to ignore? <BsChevronDown />
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={classes.accordionPanel}>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
          occaecat ut occaecat consequat est minim minim esse tempor laborum
          consequat esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem className={classes.accordionItem}>
      <AccordionItemHeading className={classes.accordionHeading}>
        <AccordionItemButton className={classes.accordionButton}>
          What harsh truths do you prefer to ignore? <BsChevronDown />
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={classes.accordionPanel}>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
          occaecat ut occaecat consequat est minim minim esse tempor laborum
          consequat esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem className={classes.accordionItem}>
      <AccordionItemHeading className={classes.accordionHeading}>
        <AccordionItemButton className={classes.accordionButton}>
          What harsh truths do you prefer to ignore? <BsChevronDown />
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={classes.accordionPanel}>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
          occaecat ut occaecat consequat est minim minim esse tempor laborum
          consequat esse adipisicing eu reprehenderit enim. Exercitation in
          fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
          consequat est minim minim esse tempor laborum consequat esse
          adipisicing eu reprehenderit enim. Exercitation in fugiat est ut
          ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est
          minim minim esse tempor laborum consequat esse adipisicing eu
          reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  </Accordion>
  </section>
  )
}

export default FAQ
