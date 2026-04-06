import type { CSSProperties } from "react";

function FlowOrb({ style, zIndex }: { style: CSSProperties; zIndex: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none"
      style={{
        position: "absolute",
        zIndex,
        borderRadius: "50%",
        ...style,
      }}
    />
  );
}

export type FlowOrbsVariant = "light" | "white" | "cta" | "storyTeam";

export function FlowOrbs({ variant }: { variant: FlowOrbsVariant }) {
  if (variant === "light") {
    return (
      <>
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(88vw, 440px)",
            height: "min(88vw, 440px)",
            top: "-12%",
            left: "-18%",
            backgroundColor: "rgba(59, 130, 246, 0.14)",
          }}
        />
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(88vw, 480px)",
            height: "min(88vw, 480px)",
            bottom: "-38%",
            right: "-14%",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          }}
        />
      </>
    );
  }
  if (variant === "white") {
    return (
      <>
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(78vw, 380px)",
            height: "min(78vw, 380px)",
            top: "8%",
            left: "-16%",
            backgroundColor: "rgba(59, 130, 246, 0.18)",
          }}
        />
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(72vw, 320px)",
            height: "min(72vw, 320px)",
            bottom: "0%",
            right: "-10%",
            backgroundColor: "rgba(15, 23, 42, 0.08)",
          }}
        />
      </>
    );
  }
  if (variant === "storyTeam") {
    return (
      <>
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(65vw, 320px)",
            height: "min(65vw, 320px)",
            top: "-8%",
            right: "-8%",
            backgroundColor: "rgba(15, 23, 42, 0.07)",
          }}
        />
        <FlowOrb
          zIndex={0}
          style={{
            width: "min(58vw, 300px)",
            height: "min(58vw, 300px)",
            bottom: "-15%",
            left: "-6%",
            backgroundColor: "rgba(59, 130, 246, 0.11)",
          }}
        />
      </>
    );
  }
  return (
    <>
      <FlowOrb
        zIndex={1}
        style={{
          width: "min(70vw, 400px)",
          height: "min(70vw, 400px)",
          top: "50%",
          left: "-14%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(59, 130, 246, 0.22)",
        }}
      />
      <FlowOrb
        zIndex={1}
        style={{
          width: "min(75vw, 380px)",
          height: "min(75vw, 380px)",
          bottom: "5%",
          right: "-8%",
          backgroundColor: "rgba(59, 130, 246, 0.14)",
        }}
      />
    </>
  );
}
