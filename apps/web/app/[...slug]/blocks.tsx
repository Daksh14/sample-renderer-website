"use client";

import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface HeaderContent {
  logo: { alt?: string; _asset?: { url?: string } };
  nav_items: NavItem[];
  banner_text?: string;
  button_primary?: { label: string; url: string };
  button_secondary?: { label: string; url: string };
}

interface BrandImage {
  alt?: string;
  _asset?: { url?: string };
}

interface HeroContent {
  heading?: string;
  brand_name?: string;
  subtitle?: string;
  primary_button?: { label: string; url: string };
  secondary_button?: { label: string; url: string };
  brand_one?: BrandImage;
  brand_two?: BrandImage;
  [key: string]: any;
}

interface DashboardPreviewContent {
  image_url?: string;
  alt?: string;
}

const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

function ChevronDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ marginLeft: "8px", display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ marginRight: "8px", display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }}
    >
      <path
        d="M20 4L20 36M4 20L36 20M8.2 8.2L31.8 31.8M31.8 8.2L8.2 31.8"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeaderBlock({ content }: { content: HeaderContent }) {
  
  const navItems = content["nav_items"] || [];
  const announcement = content.banner_text;
  const ctaLabel = content["button_secondary"]?.label || "Open app";
  const ctaHref = content["button_secondary"]?.url || "#";
  const authLabel = content["button_primary"]?.label || "Log out";
  const authHref = content["button_primary"]?.url || "#";
  const logoUrl = content.logo?._asset?.url
    ? `https://profound-store-pull.b-cdn.net/uploads/${content.logo._asset.url}.png`
    : null;
  const logoAlt = content.logo?.alt || "Logo";

  return (
    <header>
      {/* Navigation Bar */}
      <nav
        style={{
          background: "#0f1117",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          height: "64px",
          fontFamily,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={logoAlt}
              style={{ height: "28px", width: "auto", display: "block" }}
            />
          ) : (
            <LogoIcon />
          )}
        </a>

        {/* Nav Items */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {navItems.map((item: any, idx: number) => (
            <a
              key={idx}
              href={item.href || "#"}
              style={{
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              {typeof item === "string" ? item : item.label}
              {typeof item === "object" && item.hasDropdown && <ChevronDown />}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexShrink: 0,
          }}
        >
          <a
            href={authHref}
            style={{
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 400,
            }}
          >
            {authLabel}
          </a>
          <a
            href={ctaHref}
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              padding: "8px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.25)",
              whiteSpace: "nowrap",
            }}
          >
            {ctaLabel}
          </a>
        </div>
        </div>
      </nav>

      {/* Announcement Banner */}
      {announcement && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            background: "#0a0b10",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "12px 24px",
            fontFamily,
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            {announcement}
          </span>
          <ArrowRight />
        </div>
      )}
    </header>
  );
}

function BrandCycler({ brands }: { brands: BrandImage[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (brands.length <= 1) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % brands.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  if (brands.length === 0) return null;

  const brand = brands[index];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: "56px",
        transition: "opacity 0.4s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <img
        src={`https://profound-store-pull.b-cdn.net/uploads/${brand._asset!.url}.png`}
        alt={brand.alt || "Brand"}
        style={{ height: "48px", width: "auto", display: "inline-block", verticalAlign: "middle" }}
      />
    </span>
  );
}

export function HeroBlock({ content }: { content: HeroContent }) {
  const heading = content.heading || "Get your brand mentioned by";
  const brands: BrandImage[] = [];
  for (const key of Object.keys(content)) {
    if (key.startsWith("brand_") && content[key]?._asset?.url) {
      brands.push(content[key]);
    }
  }
  const subtitle =
    content.subtitle ||
    "Reach millions of consumers who are using\nAI to discover new products and brands";
  const primaryButton = content.primary_button || { label: "Get Started", url: "#" };
  const secondaryButton = content.secondary_button || { label: "Get a Demo", url: "#" };

  return (
    <section
      style={{
        background: "#0f1117",
        fontFamily,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern background */}
      <div
        style={{
          position: "relative",
          padding: "0 32px",
        }}
      >
        {/* Dashed grid lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "80px",
            pointerEvents: "none",
          }}
        >
          {/* Vertical dashed lines at 33% and 66% */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "33.33%", borderLeft: "1px dashed rgba(255,255,255,0.15)" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "66.66%", borderLeft: "1px dashed rgba(255,255,255,0.15)" }} />
          {/* Horizontal dashed line */}
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", borderTop: "1px dashed rgba(255,255,255,0.15)" }} />
        </div>

        {/* Hero Card */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            marginTop: "80px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "80px 60px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            {heading}
            <br />
            <BrandCycler brands={brands} />
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "18px",
              lineHeight: 1.6,
              marginBottom: "40px",
              whiteSpace: "pre-line",
            }}
          >
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <a
              href={secondaryButton.url}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                padding: "12px 28px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "transparent",
              }}
            >
              {secondaryButton.label}
            </a>
            <a
              href={primaryButton.url}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                padding: "12px 28px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              {primaryButton.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DashboardPreviewBlock({ content }: { content: DashboardPreviewContent }) {
  const imageUrl = content.preview._asset.url || "";
  const alt = content.preview.alt || "Dashboard preview";

  return (
    <section
      style={{
        background: "#0f1117",
        padding: "40px 32px 80px",
        fontFamily,
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {imageUrl && (
          <img
             src={`https://profound-store-pull.b-cdn.net/uploads/${imageUrl}.png`}
            alt={alt}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "block",
            }}
          />
        )}
      </div>
    </section>
  );
}

interface GetAeoReportContent {
  title?: string;
  subtitle?: string;
  side_image?: { alt?: string; _asset?: { url?: string } };
  input_button?: { label?: string; style?: string };
  insights_list?: string[];
  insights_list_text?: string;
}

function CheckCircleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="10" cy="10" r="10" fill="#22c55e" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GetAeoReportBlock({ content }: { content: GetAeoReportContent }) {
  const title = content.title || "Get your free AEO Report today";
  const subtitle =
    content.subtitle ||
    "Discover how your brand performs on answer engines — and uncover the opportunities to outpace the competition";
  const buttonLabel = content.input_button?.label || "Analyze my brand";
  const insightsText = content.insights_list_text || "Get insights into:";
  const insightsList = content.insights_list || [];
  const sideImageUrl = content.side_image?._asset?.url
    ? `https://profound-store-pull.b-cdn.net/uploads/${content.side_image._asset.url}.png`
    : null;
  const sideImageAlt = content.side_image?.alt || "AEO Report";

  return (
    <section
      style={{
        background: "#0f1117",
        fontFamily,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dashed border frame */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            border: "1px dashed rgba(255,255,255,0.15)",
            borderRadius: "16px",
            padding: "80px 60px",
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* Left Column */}
          <div style={{ flex: "1 1 0%", minWidth: 0 }}>
            <h1
              style={{
                color: "#ffffff",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                margin: "0 0 20px 0",
              }}
            >
              {title}
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "17px",
                lineHeight: 1.6,
                margin: "0 0 36px 0",
                maxWidth: "440px",
              }}
            >
              {subtitle}
            </p>

            {/* URL Input */}
            <div style={{ maxWidth: "440px", marginBottom: "12px" }}>
              <input
                type="url"
                placeholder="Enter your website URL"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontFamily,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* CTA Button */}
            <div style={{ maxWidth: "440px", marginBottom: "36px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "#ffffff",
                  color: "#0f1117",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily,
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                {buttonLabel}
              </button>
            </div>

            {/* Insights List */}
            {insightsList.length > 0 && (
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: "0 0 16px 0",
                  }}
                >
                  {insightsText}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {insightsList.map((item: string, idx: number) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CheckCircleIcon />
                      <span
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "15px",
                          fontWeight: 400,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column — Side Image */}
          {sideImageUrl && (
            <div
              style={{
                flex: "1.2 1 0%",
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginRight: "-60px",
                marginTop: "-80px",
                marginBottom: "-80px",
              }}
            >
              <img
                src={sideImageUrl}
                alt={sideImageAlt}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
