#!/usr/bin/env python3
"""
Final NDA for Jett Optics
- Dates: August 10, 2026
- AI/LLM restriction clause
- Smaller faded watermark anchored center-bottom
- Legal Binding + Ward Law Office section
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.utils import ImageReader

OUTPUT_PATH = "IP_NDA_JETT_OPTICS_LLC_August_2026.pdf"
WATERMARK_PATH = "watermark_faded_bottom.png"  # provide your faded logo

PAGE_WIDTH, PAGE_HEIGHT = letter

def add_watermark(c, doc):
    """Draw smaller faded logo watermark anchored at center-bottom of the page."""
    try:
        wm = ImageReader(WATERMARK_PATH)
        wm_w = 2.9 * inch
        wm_h = 2.9 * inch
        x = (PAGE_WIDTH - wm_w) / 2
        y = 0.85 * inch
        c.saveState()
        c.drawImage(wm, x, y, width=wm_w, height=wm_h, mask='auto', preserveAspectRatio=True)
        c.restoreState()
    except Exception as e:
        print(f"Watermark error: {e}")

def add_footer(c, doc):
    c.saveState()
    c.setFont("Times-Roman", 8)
    c.setFillColor(colors.HexColor("#777777"))
    c.drawCentredString(PAGE_WIDTH / 2, 0.38 * inch, "Jett Optics — Confidential | Sole Independent Inventor")
    c.restoreState()

def on_page(canvas, doc):
    add_watermark(canvas, doc)
    add_footer(canvas, doc)

def build_nda():
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        rightMargin=0.82 * inch,
        leftMargin=0.82 * inch,
        topMargin=0.60 * inch,
        bottomMargin=0.70 * inch,
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "TitleStyle",
        parent=styles["Heading1"],
        fontSize=13,
        leading=16,
        alignment=TA_CENTER,
        spaceAfter=3,
        fontName="Times-Bold",
        textColor=colors.HexColor("#1a1a1a"),
    )

    date_style = ParagraphStyle(
        "DateStyle",
        parent=styles["Normal"],
        fontSize=10.5,
        leading=13,
        alignment=TA_LEFT,
        spaceAfter=6,
        fontName="Times-Roman",
    )

    header_style = ParagraphStyle(
        "HeaderStyle",
        parent=styles["Normal"],
        fontSize=9.5,
        leading=11.5,
        alignment=TA_CENTER,
        spaceAfter=1,
        fontName="Times-Bold",
        textColor=colors.HexColor("#222222"),
    )

    subheader_style = ParagraphStyle(
        "SubHeaderStyle",
        parent=styles["Normal"],
        fontSize=9,
        leading=11,
        alignment=TA_CENTER,
        spaceAfter=1,
        fontName="Times-Roman",
        textColor=colors.HexColor("#333333"),
    )

    re_style = ParagraphStyle(
        "ReStyle",
        parent=styles["Normal"],
        fontSize=10.5,
        leading=13,
        alignment=TA_LEFT,
        spaceBefore=8,
        spaceAfter=6,
        fontName="Times-Bold",
    )

    body_style = ParagraphStyle(
        "BodyStyle",
        parent=styles["Normal"],
        fontSize=9.3,
        leading=12.4,
        alignment=TA_JUSTIFY,
        spaceAfter=6.5,
        fontName="Times-Roman",
    )

    exception_style = ParagraphStyle(
        "ExceptionStyle",
        parent=styles["Normal"],
        fontSize=9.3,
        leading=12,
        alignment=TA_LEFT,
        spaceAfter=2.5,
        fontName="Times-Roman",
        leftIndent=16,
    )

    signature_style = ParagraphStyle(
        "SignatureStyle",
        parent=styles["Normal"],
        fontSize=10,
        leading=12.5,
        alignment=TA_LEFT,
        fontName="Times-Roman",
    )

    section_header_style = ParagraphStyle(
        "SectionHeaderStyle",
        parent=styles["Normal"],
        fontSize=10.5,
        leading=13,
        alignment=TA_LEFT,
        spaceBefore=8,
        spaceAfter=4,
        fontName="Times-Bold",
        textColor=colors.HexColor("#111111"),
    )

    story = []

    story.append(Paragraph("CONFIDENTIALITY AGREEMENT", title_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Date:</b> August 10, 2026", date_style))
    story.append(Paragraph("JETT OPTICAL ENCRYPTION - NEUROMORPHIC APPLICATION UX", header_style))
    story.append(Paragraph("JOE AGENT / JOULE ENCRYPTION TEMPORAL TEMPLATE (KBSE)", subheader_style))
    story.append(Paragraph("JETT OPTICS - ASTRO.KNOTS", header_style))
    story.append(Spacer(1, 5))
    story.append(Paragraph("<b>RE:</b>&nbsp;&nbsp;&nbsp;Confidential Disclosure Agreement", re_style))

    story.append(Paragraph(
        "We are considering prospects for working with you and/or your company in connection with "
        "a project of ours (Jett Optical Encryption). This letter confirms your agreement to maintain in "
        "confidence the information relating to the Project that will be disclosed to you.",
        body_style
    ))

    story.append(Paragraph(
        "We believe that it will be mutually beneficial to enter into discussions, or into an ongoing "
        "business relationship, with you, your company, or your personnel that will result in disclosures to "
        "you of our own Confidential Information or the Confidential Information of one or more other "
        "companies relating to the Project. For reasons you will understand, we cannot disclose information "
        "about the Project without your commitment to maintain the information in strict confidence. In some "
        "cases, we are under a contractual duty of confidentiality to other companies to maintain the "
        "confidentiality of information that has been disclosed to us by that company.",
        body_style
    ))

    story.append(Paragraph(
        "For the protection of both parties, we feel it advisable, prior to such disclosure, to enter into "
        "an agreement that protects our Confidential Information and the Confidential Information of our "
        "trading partners against unauthorized use or disclosure to third parties.",
        body_style
    ))

    story.append(Paragraph(
        "Accordingly, it is understood that, during the term of these discussions and any subsequent "
        "engagement, valuable technical data, proprietary information, know-how, and trade secrets, all of a "
        "confidential nature, may be disclosed by us to you. Any such Confidential Information disclosed by "
        "us is to be used by you only for the purposes of the discussions or any subsequent engagement that is "
        "related to the Project. You agree to refrain from copying, reverse engineering, disassembling, "
        "analyzing, decompiling, or attempting any similar assessment of any software, code, samples, products, "
        "inventions, prototypes, or other tangible objects that we provide to you.",
        body_style
    ))

    story.append(Paragraph(
        "<b>AI / LLM Use Restriction.</b> You expressly agree that you shall not, and shall not permit any "
        "third party (including any employee, contractor, affiliate, or agent) to, input, upload, process, "
        "analyze, train upon, fine-tune, embed, or otherwise use any Confidential Information disclosed by "
        "Jett Optics (including without limitation any documents, source code, designs, algorithms, "
        "prototypes, technical data, intellectual property, or related materials of Jett Optical Encryption, "
        "JOE Agent, Joule Encryption Temporal Template (KBSE), Astro.Knots, or any other Jett Optics IP) in "
        "connection with, as training data for, or as input to any artificial intelligence system, large "
        "language model (LLM), generative AI tool, machine learning model, neural network, or any similar "
        "AI product, service, platform, or tool, whether commercial, open-source, proprietary, or experimental. "
        "This restriction applies to all AI systems including but not limited to ChatGPT, Claude, Gemini, "
        "Grok, Llama, and any other LLM or AI service. Any such use constitutes a material breach of this "
        "Agreement and may result in immediate termination and legal remedies.",
        body_style
    ))

    story.append(Paragraph(
        "It is also understood that disclosure of such Confidential Information will be made upon the "
        "express condition that any such information so disclosed will be received and accepted in confidence "
        "and will not be disclosed to anyone other than to you or to officers and employees of your company "
        "who have a need to know the information and who are first made aware of its confidential character "
        "and their obligation to maintain its confidentiality.",
        body_style
    ))

    story.append(Paragraph(
        "Each party shall have the right to terminate this agreement by giving to the other party thirty "
        "(30) days written notice. Unless sooner terminated, the agreement shall expire on the fifth "
        "anniversary of the date of completion of the last engagement with us, or the last date of disclosure of "
        "Confidential Information. However, the above obligations to refrain from use and disclosure, and to "
        "maintain the information in confidence, shall continue beyond the life of this agreement until, and to "
        "the extent that, written records show that the Confidential Information is:",
        body_style
    ))

    story.append(Paragraph(
        "1.&nbsp;&nbsp;&nbsp;now or hereafter generally available to the public without breach of this agreement;",
        exception_style
    ))
    story.append(Paragraph(
        "2.&nbsp;&nbsp;&nbsp;already known to the receiving party prior to acceptance of this agreement; or",
        exception_style
    ))
    story.append(Paragraph(
        "3.&nbsp;&nbsp;&nbsp;received from a third party without breach of any obligation of confidence by the third party.",
        exception_style
    ))
    story.append(Spacer(1, 5))

    story.append(Paragraph(
        "If the above terms are acceptable, please so indicate by signing both copies of this agreement "
        "or by having an officer of your company execute both copies of this agreement, and returning one "
        "copy to us.",
        body_style
    ))

    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#444444"), spaceBefore=2, spaceAfter=6))

    story.append(Paragraph("LEGAL BINDING EFFECT & PATENT COUNSEL NOTICE", section_header_style))

    story.append(Paragraph(
        "This Confidentiality Agreement is a legally binding contract. By signing below, the receiving party "
        "acknowledges that they have read, understood, and agree to be bound by all terms and conditions set "
        "forth herein, including the AI / LLM Use Restriction and all obligations of confidentiality.",
        body_style
    ))

    story.append(Paragraph(
        "For any questions, clarifications, or legal matters regarding the intellectual property rights that "
        "protect the Sole Independent Inventor (Joshua J Martinez / Jett Optics), including patents, "
        "provisional applications, continuation-in-part filings, trade secrets, or related IP assets, please "
        "contact the undersigned’s patent counsel:",
        body_style
    ))

    story.append(Paragraph(
        "<b>Ward Law Office LLC</b><br/>"
        "Registered Patent Attorneys<br/>"
        "120 1/2 S. Washington Street, Suite 207<br/>"
        "Tiffin, Ohio 44883<br/>"
        "Specializing in patent and trademark protection for independent inventors and businesses.",
        body_style
    ))

    story.append(Paragraph(
        "All inquiries concerning the scope, validity, enforcement, or licensing of Jett Optics intellectual "
        "property should be directed to Ward Law Office. The receiving party is advised that unauthorized use "
        "or disclosure of the Confidential Information may give rise to claims under applicable patent, trade "
        "secret, and contract law.",
        body_style
    ))

    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.grey, spaceBefore=2, spaceAfter=8))

    story.append(Paragraph("Sincerely,", signature_style))
    story.append(Spacer(1, 16))
    story.append(Paragraph("<b>Joshua J Martinez</b>", signature_style))
    story.append(Paragraph("Jett Optics Founder & Sole Independent Inventor", signature_style))

    story.append(Spacer(1, 12))

    story.append(Paragraph(
        "Approved and accepted this <b>10th</b> day of <b>August 2026</b> with the intention to be legally bound thereby.",
        body_style
    ))
    story.append(Spacer(1, 42))

    story.append(Paragraph("________________________________________", signature_style))
    story.append(Paragraph("Name / Company", signature_style))
    story.append(Spacer(1, 6))
    story.append(Paragraph("<b>By:</b> Theodore Fausak", signature_style))
    story.append(Paragraph("<b>Title:</b> Co-Founder", signature_style))

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"Created: {OUTPUT_PATH}")
    return OUTPUT_PATH

if __name__ == "__main__":
    build_nda()
