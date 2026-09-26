"""Two-study summary figure for the LEC 2026 featured-project card."""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager
from matplotlib.patches import FancyBboxPatch, Rectangle

OUT = Path(__file__).resolve().parent / "assets" / "images" / "lec2026-ai-paradox-summary.png"

NAVY = "#1a2c4e"
INK = "#26324a"
GOLD = "#c9a227"
MUTED = "#5f6b7a"
FAINT = "#8a94a3"
RULE = "#e6e1d3"
PAPER = "#fbfaf7"
SOFT_NAVY = "#e8eef4"
SOFT_TEAL = "#e4f0f0"
WHITE = "#ffffff"

SERIF = font_manager.FontProperties(family="DejaVu Serif", weight="bold")
SANS = font_manager.FontProperties(family="DejaVu Sans")
SANS_BOLD = font_manager.FontProperties(family="DejaVu Sans", weight="bold")


def box(ax, x, y, w, h, face, edge=None, lw=0.9):
    ax.add_patch(
        FancyBboxPatch(
            (x, y),
            w,
            h,
            boxstyle="round,pad=0.01,rounding_size=0.045",
            facecolor=face,
            edgecolor=edge or RULE,
            linewidth=lw,
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
    for spine in ax.spines.values():
        spine.set_visible(False)

    ax.add_patch(Rectangle((0, 7.44), W, 0.08, facecolor=NAVY, edgecolor="none"))
    ax.text(0.38, 6.98, "THE AI PARADOX", ha="left", va="center",
            fontsize=22, color=NAVY, fontproperties=SERIF)
    ax.text(0.38, 6.52, "How optimization may undermine meaningful work",
            ha="left", va="center", fontsize=12, color=INK, fontproperties=SANS)
    ax.add_patch(Rectangle((0.38, 6.28), 1.65, 0.045, facecolor=GOLD, edgecolor="none"))

    # Column headers sit well above the cards
    ax.text(0.38, 5.92, "Study 1  ·  Two-wave panel", ha="left", va="center",
            fontsize=11.2, color=NAVY, fontproperties=SANS_BOLD)
    ax.text(0.38, 5.62, "T1 March 2016   ·   T2 Feb–Mar 2017   ·   n = 144 matched",
            ha="left", va="center", fontsize=8.8, color=MUTED, fontproperties=SANS)

    ax.text(5.78, 5.92, "Study 2  ·  Occupational talk", ha="left", va="center",
            fontsize=11.2, color=NAVY, fontproperties=SANS_BOLD)
    ax.text(5.78, 5.62, "allnurses.com   ·   capture years 2016–2026   ·   7,709 posts",
            ha="left", va="center", fontsize=8.8, color=MUTED, fontproperties=SANS)

    cells = [
        (0.38, 3.78, SOFT_NAVY, NAVY, "Individuation", "Agency  \u00d7  Self"),
        (2.82, 3.78, "#d5deea", NAVY, "Contribution", "Agency  \u00d7  Others"),
        (0.38, 2.10, SOFT_TEAL, "#2e6b6b", "Self-connection", "Communion  \u00d7  Self"),
        (2.82, 2.10, "#c5e0e0", "#2e6b6b", "Unification", "Communion  \u00d7  Others"),
    ]
    for x, y, face, edge, title, sub in cells:
        box(ax, x, y, 2.28, 1.50, face, edge, lw=1.05)
        ax.text(x + 0.14, y + 0.96, title, ha="left", va="center",
                fontsize=11.6, color=edge, fontproperties=SERIF)
        ax.text(x + 0.14, y + 0.52, sub, ha="left", va="center",
                fontsize=9.6, color=INK, fontproperties=SANS)

    # Study 1 locked results: sit between the 2x2 and the footer, gold rule above
    ax.add_patch(Rectangle((0.38, 1.86), 4.72, 0.03, facecolor=GOLD, edgecolor="none"))
    s1 = [
        (1.62, "Agency PSA  .93     Communion  .48"),
        (1.30, "One-shot not accepted  \u00b7  no engineered prompt met the bar"),
        (0.98, "Registered T2 null     BF01  =  481.5"),
    ]
    for y, line in s1:
        ax.text(0.38, y, line, ha="left", va="center",
                fontsize=9.8, color=INK, fontproperties=SANS)

    facts = [
        (4.55, "Care language is still present late in the series"),
        (3.55, "Hit rates are noisy  ·  topic stems, thin cells"),
        (2.55, "Parallel 2PL  ·  one latent score per post"),
        (1.55, "2016 is the origin year  ·  not a 2023 cut"),
    ]
    for y, (title, sub) in zip(
        (4.10, 3.10, 2.10, 1.10),
        (
            ("Care talk remains", "Does not drop in the late window"),
            ("Hit rates are noisy", "Topic stems and thin year cells"),
            ("Parallel latent 2PL", "One occupational-talk score per post"),
            ("Origin year is 2016", "Not a 2023 AI-start contrast"),
        ),
    ):
        box(ax, 5.78, y, 5.04, 0.88, WHITE, RULE, lw=0.85)
        ax.add_patch(Rectangle((5.78, y + 0.84), 5.04, 0.04, facecolor=GOLD, edgecolor="none"))
        ax.text(5.96, y + 0.56, title, ha="left", va="center",
                fontsize=12.2, color=NAVY, fontproperties=SERIF)
        ax.text(5.96, y + 0.24, sub, ha="left", va="center",
                fontsize=9.6, color=MUTED, fontproperties=SANS)

    ax.text(
        0.38,
        0.50,
        "Rosso, Dekas, and Wrzesniewski (2010)  ·  13 facets, inclusive OR  ·  276 stories, two human coders",
        ha="left",
        va="center",
        fontsize=8.2,
        color=FAINT,
        fontproperties=SANS,
    )
    ax.text(
        0.38,
        0.24,
        "Study 2 is lexical and exploratory  ·  capture year is not AI use",
        ha="left",
        va="center",
        fontsize=8.2,
        color=FAINT,
        fontproperties=SANS,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(OUT, dpi=180, facecolor=PAPER, bbox_inches="tight", pad_inches=0.16)
    plt.close(fig)
    print("Wrote", OUT)


if __name__ == "__main__":
    main()
