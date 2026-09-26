"""Summary figure for the AI Bubble Pressure Score project card."""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager
from matplotlib.patches import FancyArrowPatch, FancyBboxPatch, Rectangle

OUT = Path(__file__).resolve().parent / "assets" / "images" / "aibps-summary.png"

NAVY = "#1a2c4e"
INK = "#26324a"
GOLD = "#c9a227"
MUTED = "#5f6b7a"
FAINT = "#8a94a3"
RULE = "#e6e1d3"
PAPER = "#fbfaf7"
WHITE = "#ffffff"
SOFT_NAVY = "#e8eef4"
SOFT_TEAL = "#e4f0f0"

SERIF = font_manager.FontProperties(family="DejaVu Serif", weight="bold")
SANS = font_manager.FontProperties(family="DejaVu Sans")
SANS_BOLD = font_manager.FontProperties(family="DejaVu Sans", weight="bold")


def box(ax, x, y, w, h, face, edge=None, lw=0.9):
    ax.add_patch(
        FancyBboxPatch(
            (x, y), w, h,
            boxstyle="round,pad=0.01,rounding_size=0.045",
            facecolor=face, edgecolor=edge or RULE, linewidth=lw,
        )
    )


def main() -> None:
    W, H = 11.2, 7.6
    fig, ax = plt.subplots(figsize=(W, H), dpi=180)
    fig.patch.set_facecolor(PAPER)
    ax.set_xlim(0, W)
    ax.set_ylim(0, H)
    ax.set_facecolor(PAPER)
    ax.axis("off")

    ax.add_patch(Rectangle((0, 7.44), W, 0.08, facecolor=NAVY, edgecolor="none"))
    ax.text(0.38, 6.98, "AI BUBBLE PRESSURE SCORE", ha="left", va="center",
            fontsize=22, color=NAVY, fontproperties=SERIF)
    ax.text(0.38, 6.52, "How stretched is the AI ecosystem relative to its own history?",
            ha="left", va="center", fontsize=12, color=INK, fontproperties=SANS)
    ax.add_patch(Rectangle((0.38, 6.28), 1.65, 0.045, facecolor=GOLD, edgecolor="none"))

    ax.text(0.38, 5.92, "Six pillars  ·  equal weights, configurable", ha="left", va="center",
            fontsize=11.2, color=NAVY, fontproperties=SANS_BOLD)
    ax.text(0.38, 5.62, "Each pillar is scaled 0–100 before aggregation",
            ha="left", va="center", fontsize=8.8, color=MUTED, fontproperties=SANS)

    pillars = [
        ("Market", "SOXX  ·  QQQ  ·  AI basket", SOFT_NAVY, NAVY),
        ("Credit", "HY and IG credit spreads", SOFT_NAVY, NAVY),
        ("Capex", "Hyperscaler and fab cycles", SOFT_NAVY, NAVY),
        ("Infrastructure", "Power, grid, cooling", SOFT_TEAL, "#2e6b6b"),
        ("Adoption", "Enterprise and cloud uptake", SOFT_TEAL, "#2e6b6b"),
        ("Sentiment", "News and text hype", SOFT_TEAL, "#2e6b6b"),
    ]
    x0, y_top, w, h, gap = 0.38, 4.30, 2.28, 1.10, 0.16
    for i, (title, sub, face, edge) in enumerate(pillars):
        col, row = i % 2, i // 2
        x = x0 + col * (w + gap)
        y = y_top - row * (h + gap)
        box(ax, x, y, w, h, face, edge, lw=1.05)
        ax.text(x + 0.14, y + 0.70, title, ha="left", va="center",
                fontsize=11.4, color=edge, fontproperties=SERIF)
        ax.text(x + 0.14, y + 0.32, sub, ha="left", va="center",
                fontsize=8.4, color=INK, fontproperties=SANS)

    # Arrow from pillars to the composite
    ax.add_patch(FancyArrowPatch((5.08, 3.20), (5.66, 3.20),
                                 arrowstyle="-|>", mutation_scale=16,
                                 color=MUTED, linewidth=1.2))

    # Right column: pipeline steps
    ax.text(5.78, 5.92, "From raw series to one composite", ha="left", va="center",
            fontsize=11.2, color=NAVY, fontproperties=SANS_BOLD)
    ax.text(5.78, 5.62, "Daily refresh via GitHub Actions  ·  Streamlit dashboard",
            ha="left", va="center", fontsize=8.8, color=MUTED, fontproperties=SANS)

    steps = [
        ("Ingest", "yfinance, FRED, manual capex CSVs"),
        ("Normalize", "Rolling z-scores, percentiles, sigmoid to 0–100"),
        ("Aggregate", "Weighted mean across pillars, monthly index"),
        ("Interpret", "Low <30  ·  healthy 30–60  ·  frothy 60–80  ·  critical >80"),
    ]
    for y, (title, sub) in zip((4.10, 3.10, 2.10, 1.10), steps):
        box(ax, 5.78, y, 5.04, 0.88, WHITE, RULE, lw=0.85)
        ax.add_patch(Rectangle((5.78, y + 0.84), 5.04, 0.04, facecolor=GOLD, edgecolor="none"))
        ax.text(5.96, y + 0.56, title, ha="left", va="center",
                fontsize=12.2, color=NAVY, fontproperties=SERIF)
        ax.text(5.96, y + 0.24, sub, ha="left", va="center",
                fontsize=9.0, color=MUTED, fontproperties=SANS)

    ax.add_patch(Rectangle((0.38, 1.50), 4.72, 0.03, facecolor=GOLD, edgecolor="none"))
    ax.text(0.38, 1.24, "Composite reads pressure, not price direction",
            ha="left", va="center", fontsize=9.8, color=INK, fontproperties=SANS)
    ax.text(0.38, 0.94, "Reference regimes: fiber 1999  ·  shale 2012  ·  current AI capex cycle",
            ha="left", va="center", fontsize=9.8, color=INK, fontproperties=SANS)

    ax.text(0.38, 0.40,
            "Descriptive index, not investment advice  ·  sentiment layer is API-ready with synthetic fallback",
            ha="left", va="center", fontsize=8.2, color=FAINT, fontproperties=SANS)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(OUT, dpi=180, facecolor=PAPER, bbox_inches="tight", pad_inches=0.16)
    plt.close(fig)
    print("Wrote", OUT)


if __name__ == "__main__":
    main()

