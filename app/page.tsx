"use client";
import Thumbnail from "@/components/apebrush/Thumbnail/Thumbnail";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/apebrush/Button/Button";
import DottedIndicator from "@/components/apebrush/DottedIndicator/DottedIndicator";
import { useLayoutEffect, useRef } from "react";
import Loader from "@/components/apebrush/Loader/Loader";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section/Section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "@/components/Navbar/Navbar";
import CardCarousel from "@/components/apebrush/CardCarousel/CardCarousel";
import Card from "@/components/apebrush/Card/Card";
import "react-multi-carousel/lib/styles.css";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

export default function Home() {
  const pageRef = useRef(null);

  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const loadingProps = loading
    ? {
        opacity: 0,
        overflow: "hidden",
      }
    : {
        opacity: 1,
        overflow: "visible",
      };

  return (
    <div className={styles.upper_container} ref={pageRef}>
      <div
        className={styles.vertical_container}
        style={{
          ...loadingProps,
        }}
      >
        <Section
          isFull={true}
          align="top"
          sectionId="home"
          theme="light"
          animationSettings={{
            defaultAnimation: true,
          }}
        >
          <Navbar />

          <div className={styles.header}>
            <h1>Ape Early.</h1>
            <div className={styles.description_text}>
              Runeapes is the first decentralized launchpad for Runes with tools
              that run natively on Bitcoin.
            </div>
            <br />
            <br />
            <br />
            <SocialIcons />
          </div>
          <div className={styles.hero_container}>
            <Image
              className={styles.hero}
              src="/illustrations/hero.png"
              alt="Rune Apes hero"
              width={5000}
              height={2813}
            />
          </div>
        </Section>

        <Section
          isFull={true}
          theme="dark"
          sectionId="mission"
          parallaxBackground={{
            iconsPath: "/icons/rocks/",
            upperNodes: [
              ["550px", "10%", "18"],
              ["220px", "35%", "-6"],
              ["calc(100% - 440px)", "6%", "-12"],
              ["calc(100% - 161px)", "83%", "2"],
            ],
            lowerNodes: [
              ["34px", "17%", "7"],
              ["78px", "92%", "-14"],
              ["calc(100% - 140px)", "23%", "16"],
              ["calc(100% - 73px)", "50%", "8"],
              ["calc(100% - 243px)", "72%", "-3"],
              ["calc(100% - 144px)", "33%", "5"],
            ],
          }}
        >
          <div className={styles.header2 + " " + styles.header_white}>
            <h2>
              At The <span className={styles.primary}>Frontier</span> Of A New
              Era For Bitcoin.
            </h2>
            <div className={styles.description_text}>
              <span className={styles.white}>Bitcoin is evolving.</span> For the
              first time ever since its inception, the Bitcoin network has
              become a multi-asset chain with the introduction of runes.
              <br /> <br />
              We aim to be at the forefront of this evolution by being the first
              trustless protocol that leverages the native features of the
              Bitcoin network to create fundrasing campaigns for these new
              assets.
            </div>
            <div className={styles.button_container}>
              <Button type="action" actionIcon={"caret-down"}>
                <span>{"Runes? I'm in!"}</span>
              </Button>
            </div>
          </div>
        </Section>
        <Section isFull={true} theme="dark" sectionId="products">
          <div className={styles.header2 + " " + styles.header_white}>
            <h2>
              Tools Even <span className={styles.primary}>Chimps</span> Could
              Use
            </h2>
            <div className={styles.description_text}>
              Along with our launchpad, we are also building a set of tools for
              runes that, unlike other solutions, are designed to run natively
              with the features offered by the Bitcoin network - rather than
              relying on another blockchain to function.
            </div>
            <div className={styles.button_container}>
              <Button
                href="https://docsend.com/view/vc3c22mux4c6892w"
                type="action"
              >
                <span>{"Read the deck"}</span>
              </Button>
            </div>
          </div>
          <CardCarousel
            className={"mirror-animation-products"}
            isInfinite={true}
            defaultIndex={1}
          >
            <Card
              title="Ape Pad"
              description={
                'Create trustless Rune raises with multi-sig "raise wallets"  controlled by many different agents.'
              }
              thumbnail="pad"
              iconPath="/icons/ape_pad.svg"
              href={{
                label: "Read the deck",
                url: "https://docsend.com/view/vc3c22mux4c6892w",
              }}
            />

            <Card
              title="Ape Locker"
              description={
                "Create UTXOs that  timelock any Rune with Bitcoin's  native OP_LOCKTIME scripts."
              }
              thumbnail="locker"
              iconPath="/icons/ape_locker.svg"
            />

            <Card
              title="Ape Etch"
              description={
                "Etch and premine your very own rune on the Bitcoin network."
              }
              thumbnail="etch"
              iconPath="/icons/ape_etch.svg"
            />

            <Card
              title="Ape Drop"
              description={
                "Become a custodian for the Rune Apes protocol and earn passive runes from launches on Ape Pad airdropped directly to your wallet."
              }
              thumbnail="airdrop"
              iconPath="/icons/ape_drop.svg"
            />

            <Card
              title="Ape Pools"
              description={
                "A centralized service for swapping and providing liquidity to any Rune on the bitcoin network - managed by Rune Apes Labs. "
              }
              thumbnail="pools"
              iconPath="/icons/ape_pools.svg"
            />
          </CardCarousel>
        </Section>

        <div style={{ marginTop: "10px" }}>&nbsp;</div>
      </div>
      {loading && <Loader />}
    </div>
  );
}
