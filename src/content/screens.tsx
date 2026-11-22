// Generated from the HTML prototype (SDGP_Taxy.prototype.html), then hand-edited.
// Each screen is a static picture of the app: controls are not focusable, and the
// whole window is hidden from screen readers (the title and description above it
// describe the screen instead).
import type { ReactNode } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MockProgress } from "@/components/mock/mock-progress";
import { ValidationFlags } from "@/components/mock/validation-flags";
import { AssistantReply } from "@/components/mock/assistant-reply";

export type Screen = {
  id: string;
  title: string;
  description: string;
  tag: string;
  window: ReactNode;
};

export const screens: Screen[] = [
  {
    id: "screen-1",
    title: "Login & Registration",
    description:
      "A welcoming entry point for users to access or create their account.",
    tag: "Account access",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Welcome
        </div>
        <div className="mock-body login-layout">
          <div className="login-left">
            <div className="mock-brand" style={{ margin: "0", color: "white" }}>
              <div
                className="mock-brand-icon"
                style={{ background: "white", color: "#0a62c9" }}
              >
                T
              </div>
              Tax Assistant
            </div>
            <div>
              <div
                style={{
                  fontSize: "8px",
                  letterSpacing: "1.4px",
                  color: "#d9edff",
                }}
              >
                YOUR TAX PREPARATION COMPANION
              </div>
              <h3 style={{ marginTop: "15px" }}>
                Take control of your tax preparation.
              </h3>
              <p>
                Organise your financial records and work through your
                preparation one step at a time.
              </p>
            </div>
            <p style={{ fontSize: "8px" }}>A guided preparation experience.</p>
          </div>
          <div className="login-right">
            <div className="login-form">
              <div className="mock-breadcrumb">WELCOME BACK</div>
              <h3>Sign in to continue</h3>
              <p className="mock-subtitle" style={{ marginBottom: "24px" }}>
                Enter your account details below.
              </p>
              <div className="mock-form-group">
                <label>Email address</label>
                <input
                  tabIndex={-1}
                  readOnly
                  className="mock-input"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mock-form-group">
                <label>Password</label>
                <input
                  tabIndex={-1}
                  readOnly
                  className="mock-input"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "8px",
                  color: "#0a62c9",
                  margin: "10px 0 20px",
                }}
              >
                <span>□ Remember me</span> <span>Forgot password?</span>
              </div>
              <button
                tabIndex={-1}
                type="button"
                className="mock-button"
                style={{ width: "100%" }}
              >
                Sign in →
              </button>
              <button
                tabIndex={-1}
                type="button"
                className="mock-button light"
                style={{ width: "100%", marginTop: "9px" }}
              >
                Create account
              </button>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "8px",
                  marginTop: "20px",
                  color: "#667286",
                }}
              >
                By continuing, you acknowledge the privacy notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "screen-2",
    title: "Dashboard Overview",
    description:
      "A central workspace showing preparation progress, documents and validation activity.",
    tag: "Main workspace",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Workspace
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item active">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Ask the assistant about tax records and obligations.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">WORKSPACE / OVERVIEW</div>
                <h2 className="mock-title">Your tax preparation</h2>
                <p className="mock-subtitle">Continue where you left off.</p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-grid three">
              <div className="mock-card">
                <span className="mock-stat-label">Uploaded documents</span>{" "}
                <strong className="mock-stat">
                  <NumberTicker value={12} plain />
                </strong>{" "}
                <span
                  className="mock-stat-note"
                  style={{ color: "var(--green)" }}
                >
                  Files received
                </span>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Needs review</span>{" "}
                <strong className="mock-stat">
                  <NumberTicker value={3} plain />
                </strong>{" "}
                <span
                  className="mock-stat-note"
                  style={{ color: "var(--orange)" }}
                >
                  Action required
                </span>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Tax year</span>{" "}
                <strong className="mock-stat">
                  <NumberTicker value={2026} startValue={2020} plain />
                </strong>{" "}
                <span className="mock-stat-note" style={{ color: "#66748c" }}>
                  Selected period
                </span>
              </div>
            </div>
            <div className="mock-card" style={{ marginTop: "16px" }}>
              <h4>Continue your preparation</h4>
              <p>Complete these steps to prepare your records.</p>
              <div className="mock-step">
                <div className="mock-step-left">
                  <div className="mock-step-circle complete">✓</div>
                  <div>
                    <div className="mock-step-name">
                      Complete taxpayer profile
                    </div>
                    <div className="mock-step-desc">Basic taxpayer details</div>
                  </div>
                </div>
                <span className="mock-status green">Complete</span>
              </div>
              <div className="mock-step">
                <div className="mock-step-left">
                  <div className="mock-step-circle pending">2</div>
                  <div>
                    <div className="mock-step-name">
                      Review extracted financial records
                    </div>
                    <div className="mock-step-desc">
                      Check extracted information
                    </div>
                  </div>
                </div>
                <span className="mock-status orange">Pending</span>
              </div>
              <div className="mock-step">
                <div className="mock-step-left">
                  <div className="mock-step-circle">3</div>
                  <div>
                    <div className="mock-step-name">Review tax estimate</div>
                    <div className="mock-step-desc">
                      Check calculations and assumptions
                    </div>
                  </div>
                </div>
                <span className="mock-status gray">Not started</span>
              </div>
            </div>
            <div className="mock-grid two" style={{ marginTop: "16px" }}>
              <div className="mock-card">
                <h4>Recent documents</h4>
                <div className="mock-step">
                  <div className="mock-step-left">
                    <div className="mock-file pdf">PDF</div>
                    <div>
                      <div className="mock-step-name">invoice_001.pdf</div>
                      <div className="mock-step-desc">
                        Invoice · Recently uploaded
                      </div>
                    </div>
                  </div>
                  <span className="mock-status orange">Review</span>
                </div>
                <div className="mock-step">
                  <div className="mock-step-left">
                    <div className="mock-file">PDF</div>
                    <div>
                      <div className="mock-step-name">expense_receipt.pdf</div>
                      <div className="mock-step-desc">
                        Expense · Recently uploaded
                      </div>
                    </div>
                  </div>
                  <span className="mock-status green">Matched</span>
                </div>
                <div className="mock-step">
                  <div className="mock-step-left">
                    <div className="mock-file">CSV</div>
                    <div>
                      <div className="mock-step-name">income_records.csv</div>
                      <div className="mock-step-desc">Financial record</div>
                    </div>
                  </div>
                  <span className="mock-status green">Matched</span>
                </div>
              </div>
              <div className="mock-card">
                <h4>Validation summary</h4>
                <div className="mock-step">
                  <div>
                    <div className="mock-step-name">Possible duplicate</div>
                    <div className="mock-step-desc">
                      Confirm before excluding a record.
                    </div>
                  </div>
                  <span className="mock-status orange">!</span>
                </div>
                <div className="mock-step">
                  <div>
                    <div className="mock-step-name">Unmatched item</div>
                    <div className="mock-step-desc">
                      An item may need an explanation.
                    </div>
                  </div>
                  <span className="mock-status blue">!</span>
                </div>
                <div className="mock-step">
                  <div>
                    <div className="mock-step-name">Low-confidence field</div>
                    <div className="mock-step-desc">
                      Check extracted information.
                    </div>
                  </div>
                  <span className="mock-status orange">!</span>
                </div>
              </div>
            </div>
            <div className="mock-bottom">
              <div>
                <strong>Ready to continue?</strong>
                <p>Review your records before preparing an estimate.</p>
              </div>
              <button tabIndex={-1} type="button" className="mock-button">
                Continue →
              </button>
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-3",
    title: "Taxpayer Profile",
    description:
      "Users provide personal details, tax information and freelance activity details.",
    tag: "User information",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Tax Profile
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item active">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Update your information whenever your circumstances change.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">WORKSPACE / TAX PROFILE</div>
                <h2 className="mock-title">Your taxpayer profile</h2>
                <p className="mock-subtitle">
                  Provide the information needed to understand your tax
                  preparation requirements.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-card">
              <h4>Personal information</h4>
              <p>Basic information about the taxpayer.</p>
              <div className="mock-grid two" style={{ marginTop: "17px" }}>
                <div className="mock-form-group">
                  <label>Full name</label>
                  <input
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    defaultValue="Jaaishan Miranda"
                  />
                </div>
                <div className="mock-form-group">
                  <label>Tax identification number</label>
                  <input
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    placeholder="Enter TIN"
                  />
                </div>
                <div className="mock-form-group">
                  <label>Email address</label>
                  <input
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mock-form-group">
                  <label>Contact number</label>
                  <input
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    placeholder="Enter contact number"
                  />
                </div>
                <div className="mock-form-group">
                  <label>Country of residence</label>
                  <input
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    defaultValue="Sri Lanka"
                  />
                </div>
                <div className="mock-form-group">
                  <label>Tax year</label>
                  <input
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    defaultValue="2026"
                  />
                </div>
              </div>
            </div>
            <div className="mock-card" style={{ marginTop: "15px" }}>
              <h4>Freelance activity details</h4>
              <p>Describe the type of work and income sources.</p>
              <div className="mock-grid two" style={{ marginTop: "17px" }}>
                <div className="mock-form-group">
                  <label>Freelance activity</label>
                  <select tabIndex={-1} disabled className="mock-input">
                    <option>Software development</option>
                  </select>
                </div>
                <div className="mock-form-group">
                  <label>Business / freelance name</label>
                  <input
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    placeholder="Enter business name"
                  />
                </div>
                <div className="mock-form-group">
                  <label>Income sources</label>
                  <select tabIndex={-1} disabled className="mock-input">
                    <option>Both local and overseas</option>
                  </select>
                </div>
                <div className="mock-form-group">
                  <label>Record currency</label>
                  <select tabIndex={-1} disabled className="mock-input">
                    <option>LKR</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mock-alert info">
              <strong>Privacy notice</strong>
              <br />
              Your personal and financial information should only be collected
              and processed for the stated preparation purposes.
            </div>
            <div className="mock-bottom">
              <div>
                <strong>Profile completion</strong>
                <p>Complete your information to continue.</p>
              </div>
              <button tabIndex={-1} type="button" className="mock-button">
                Save profile →
              </button>
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-4",
    title: "Document Upload",
    description:
      "Upload invoices, receipts, bank statements and other supporting documents.",
    tag: "Document management",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Documents
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item active">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Upload documents that support your financial records.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">WORKSPACE / DOCUMENTS</div>
                <h2 className="mock-title">Your documents</h2>
                <p className="mock-subtitle">
                  Add and organise your financial documents for the selected tax
                  year.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-grid two">
              <div className="mock-card">
                <h4>Upload your files</h4>
                <p>Choose files to add to your workspace.</p>
                <div className="mock-dropzone" style={{ marginTop: "15px" }}>
                  <div className="mock-drop-icon">↑</div>
                  <h4>Drop files here</h4>
                  <p>or choose files from your device</p>
                  <button
                    tabIndex={-1}
                    type="button"
                    className="mock-button light"
                    style={{ marginTop: "12px" }}
                  >
                    Choose files
                  </button>
                  <p style={{ fontSize: "8px", marginTop: "12px" }}>
                    PDF · JPG · PNG · CSV
                  </p>
                </div>
              </div>
              <div className="mock-card">
                <h4>Document details</h4>
                <p>Provide context for your uploaded file.</p>
                <div style={{ marginTop: "16px" }}>
                  <div className="mock-form-group">
                    <label>Document type</label>
                    <select tabIndex={-1} disabled className="mock-input">
                      <option>Invoice</option>
                      <option>Receipt</option>
                      <option>Bank statement</option>
                    </select>
                  </div>
                  <div className="mock-form-group">
                    <label>Tax year / period</label>
                    <select tabIndex={-1} disabled className="mock-input">
                      <option>2026</option>
                      <option>2025</option>
                    </select>
                  </div>
                  <div className="mock-form-group">
                    <label>Document description</label>
                    <input
                      tabIndex={-1}
                      readOnly
                      className="mock-input"
                      placeholder="Optional description"
                    />
                  </div>
                  <button tabIndex={-1} type="button" className="mock-button">
                    Upload documents →
                  </button>
                </div>
              </div>
            </div>
            <div className="mock-card" style={{ marginTop: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4>Recently uploaded</h4>
                <span className="mock-status blue">12 documents</span>
              </div>
              <div className="mock-step">
                <div className="mock-step-left">
                  <div className="mock-file pdf">PDF</div>
                  <div>
                    <div className="mock-step-name">invoice_001.pdf</div>
                    <div className="mock-step-desc">
                      Invoice · 01 April 2026
                    </div>
                  </div>
                </div>
                <span className="mock-status green">Uploaded</span>
              </div>
              <div className="mock-step">
                <div className="mock-step-left">
                  <div className="mock-file">PDF</div>
                  <div>
                    <div className="mock-step-name">expense_receipt.pdf</div>
                    <div className="mock-step-desc">
                      Receipt · 03 April 2026
                    </div>
                  </div>
                </div>
                <span className="mock-status green">Uploaded</span>
              </div>
            </div>
            <div className="mock-alert info">
              <strong>Privacy reminder</strong>
              <br />
              Check sensitive information before uploading. Only upload
              documents required for your tax preparation.
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-5",
    title: "Document Extraction & Review",
    description:
      "Review the information extracted from uploaded documents before confirming it.",
    tag: "AI-assisted extraction",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Document Review
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item active">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Verify extracted information against the original document.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">
                  WORKSPACE / DOCUMENT REVIEW
                </div>
                <h2 className="mock-title">Review extracted information</h2>
                <p className="mock-subtitle">
                  Check the information identified in your uploaded document.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-grid two">
              <div className="mock-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4>Original document</h4>
                  <span className="mock-status red">PDF</span>
                </div>
                <div
                  style={{
                    background: "#f7f9fc",
                    border: "1px solid #e8edf5",
                    borderRadius: "9px",
                    padding: "17px",
                    marginTop: "15px",
                    minHeight: "320px",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      border: "1px solid #edf1f5",
                      padding: "22px",
                      borderRadius: "7px",
                      minHeight: "285px",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "800",
                      }}
                    >
                      INVOICE
                    </div>
                    <div
                      style={{
                        height: "1px",
                        background: "#e9edf4",
                        margin: "15px 0",
                      }}
                    ></div>
                    <div className="mock-step-desc">SUPPLIER / CLIENT</div>
                    <div style={{ fontSize: "10px", marginTop: "5px" }}>
                      Example Client Ltd.
                    </div>
                    <div
                      className="mock-step-desc"
                      style={{ marginTop: "20px" }}
                    >
                      INVOICE DATE
                    </div>
                    <div style={{ fontSize: "10px", marginTop: "5px" }}>
                      01 April 2026
                    </div>
                    <div
                      className="mock-step-desc"
                      style={{ marginTop: "20px" }}
                    >
                      TOTAL AMOUNT
                    </div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: "800",
                        marginTop: "5px",
                      }}
                    >
                      LKR 125,000.00
                    </div>
                    <div
                      style={{
                        height: "1px",
                        background: "#e9edf4",
                        margin: "20px 0",
                      }}
                    ></div>
                    <div className="mock-step-desc">
                      Illustrative document preview
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: "10px", fontSize: "8px" }}>
                  invoice_001.pdf · Uploaded document
                </p>
              </div>
              <div className="mock-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4>Extracted information</h4>
                  <span className="mock-status orange">Needs review</span>
                </div>
                <p>Verify the fields before confirming this record.</p>
                <div style={{ marginTop: "17px" }}>
                  <div className="mock-form-group">
                    <label>Document date</label>
                    <input
                      tabIndex={-1}
                      readOnly
                      className="mock-input"
                      defaultValue="2026-04-01"
                    />
                  </div>
                  <div className="mock-form-group">
                    <label>Supplier / client</label>
                    <input
                      tabIndex={-1}
                      readOnly
                      className="mock-input"
                      defaultValue="Example Client Ltd."
                    />
                  </div>
                  <div className="mock-form-group">
                    <label>Amount</label>
                    <input
                      tabIndex={-1}
                      readOnly
                      className="mock-input"
                      defaultValue="125,000.00"
                    />
                  </div>
                  <div className="mock-form-group">
                    <label>Category</label>
                    <select tabIndex={-1} disabled className="mock-input">
                      <option>Freelance income</option>
                    </select>
                  </div>
                  <div className="mock-form-group">
                    <label>Currency</label>
                    <select tabIndex={-1} disabled className="mock-input">
                      <option>LKR</option>
                    </select>
                  </div>
                  <div className="mock-alert warning">
                    <strong>Low-confidence field</strong>
                    <br />
                    Check the extracted information against the source document.
                  </div>
                  <div
                    style={{ display: "flex", gap: "8px", marginTop: "14px" }}
                  >
                    <button tabIndex={-1} type="button" className="mock-button">
                      Confirm record
                    </button>
                    <button
                      tabIndex={-1}
                      type="button"
                      className="mock-button outline"
                    >
                      Edit fields
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-6",
    title: "Financial Records & Validation",
    description:
      "Review extracted financial records and identify possible issues before proceeding.",
    tag: "Validation engine",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Financial Records
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item active">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Resolve validation flags before preparing your estimate.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">
                  WORKSPACE / FINANCIAL RECORDS
                </div>
                <h2 className="mock-title">Your financial records</h2>
                <p className="mock-subtitle">
                  Review and organise your extracted financial information.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-grid three">
              <div className="mock-card">
                <span className="mock-stat-label">Total records</span>{" "}
                <strong className="mock-stat">
                  <NumberTicker value={12} plain />
                </strong>{" "}
                <span className="mock-stat-note">Extracted records</span>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Matched records</span>{" "}
                <strong className="mock-stat">
                  <NumberTicker value={8} plain />
                </strong>{" "}
                <span
                  className="mock-stat-note"
                  style={{ color: "var(--green)" }}
                >
                  Successfully matched
                </span>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Needs attention</span>{" "}
                <strong className="mock-stat">
                  <NumberTicker value={4} plain />
                </strong>{" "}
                <span
                  className="mock-stat-note"
                  style={{ color: "var(--orange)" }}
                >
                  Requires review
                </span>
              </div>
            </div>
            <div className="mock-card" style={{ marginTop: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <h4>Financial records</h4>
                  <p>All extracted records · Tax year 2026</p>
                </div>
                <button
                  tabIndex={-1}
                  type="button"
                  className="mock-button light"
                >
                  Filter records
                </button>
              </div>
              <div className="mock-table-wrap">
                <table className="mock-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01/04/2026</td>
                      <td>Invoice</td>
                      <td>Client payment</td>
                      <td>125,000</td>
                      <td>
                        <span className="mock-status green">Matched</span>
                      </td>
                    </tr>
                    <tr>
                      <td>03/04/2026</td>
                      <td>Expense</td>
                      <td>Software subscription</td>
                      <td>8,500</td>
                      <td>
                        <span className="mock-status orange">Check</span>
                      </td>
                    </tr>
                    <tr>
                      <td>07/04/2026</td>
                      <td>Receipt</td>
                      <td>Equipment purchase</td>
                      <td>12,000</td>
                      <td>
                        <span className="mock-status red">Duplicate?</span>
                      </td>
                    </tr>
                    <tr>
                      <td>10/04/2026</td>
                      <td>Invoice</td>
                      <td>Project payment</td>
                      <td>85,000</td>
                      <td>
                        <span className="mock-status green">Matched</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mock-grid two" style={{ marginTop: "16px" }}>
              <div className="mock-card">
                <h4>Validation summary</h4>
                <ValidationFlags />
              </div>
              <div className="mock-card">
                <h4>Review progress</h4>
                <p>Records reviewed</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "16px",
                  }}
                >
                  <span className="mock-stat-label">9 of 12 records</span>{" "}
                  <strong style={{ fontSize: "12px" }}>75%</strong>
                </div>
                <MockProgress value={75} />
                <p style={{ marginTop: "17px" }}>
                  Review flagged records before continuing.
                </p>
                <button
                  tabIndex={-1}
                  type="button"
                  className="mock-button light"
                  style={{ marginTop: "14px" }}
                >
                  Review flagged records
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-7",
    title: "AI Tax Guidance",
    description:
      "Ask questions about tax concepts, record keeping and preparation requirements.",
    tag: "AI assistant",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Tax Guidance
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item active">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Ask questions in plain language.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">WORKSPACE / TAX GUIDANCE</div>
                <h2 className="mock-title">Ask your Tax Assistant</h2>
                <p className="mock-subtitle">
                  Understand your obligations and organise your financial
                  records.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-grid two">
              <div className="mock-card">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "9px" }}
                >
                  <div className="mock-brand-icon">✧</div>
                  <div>
                    <h4>Tax Assistant</h4>
                    <p style={{ margin: "2px 0 0" }}>Guidance workspace</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "13px",
                    marginTop: "22px",
                  }}
                >
                  <div className="mock-chat">
                    Hello! I can help explain tax-related concepts, record
                    keeping and your preparation workflow. What would you like
                    to understand?
                  </div>
                  <div className="mock-chat user">
                    What financial records should I keep as a freelancer?
                  </div>
                  <AssistantReply />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <textarea
                    tabIndex={-1}
                    readOnly
                    className="mock-input"
                    rows={3}
                    placeholder="Ask a question in plain language..."
                  ></textarea>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "9px",
                    }}
                  >
                    <button tabIndex={-1} type="button" className="mock-button">
                      Ask assistant →
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="mock-card">
                  <h4>Suggested questions</h4>
                  <div className="mock-step">
                    <span
                      className="mock-step-name"
                      style={{ fontWeight: "500" }}
                    >
                      What income records should I maintain?
                    </span>{" "}
                    <span style={{ color: "var(--blue)" }}>→</span>
                  </div>
                  <div className="mock-step">
                    <span
                      className="mock-step-name"
                      style={{ fontWeight: "500" }}
                    >
                      How should I organise business expenses?
                    </span>{" "}
                    <span style={{ color: "var(--blue)" }}>→</span>
                  </div>
                  <div className="mock-step">
                    <span
                      className="mock-step-name"
                      style={{ fontWeight: "500" }}
                    >
                      What is the difference between revenue and profit?
                    </span>{" "}
                    <span style={{ color: "var(--blue)" }}>→</span>
                  </div>
                  <div className="mock-step">
                    <span
                      className="mock-step-name"
                      style={{ fontWeight: "500" }}
                    >
                      What information should I prepare?
                    </span>{" "}
                    <span style={{ color: "var(--blue)" }}>→</span>
                  </div>
                </div>
                <div className="mock-card" style={{ marginTop: "15px" }}>
                  <h4>Official information sources</h4>
                  <div className="mock-step">
                    <div>
                      <div className="mock-step-name">
                        Inland Revenue Department
                      </div>
                      <div className="mock-step-desc">
                        Official publications and guidance
                      </div>
                    </div>
                    <span className="mock-status blue">Source</span>
                  </div>
                  <div className="mock-step">
                    <div>
                      <div className="mock-step-name">Tax legislation</div>
                      <div className="mock-step-desc">
                        Relevant legal provisions
                      </div>
                    </div>
                    <span className="mock-status blue">Source</span>
                  </div>
                </div>
                <div className="mock-alert info">
                  <strong>Important</strong>
                  <br />
                  Guidance is informational and should not replace professional
                  tax advice.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-8",
    title: "Tax Estimate & Validation",
    description:
      "Review a draft estimate, its calculation context and any outstanding questions.",
    tag: "Calculation workspace",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Tax Estimate
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item active">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Review the assumptions behind your estimate.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">WORKSPACE / TAX ESTIMATE</div>
                <h2 className="mock-title">Your tax estimate</h2>
                <p className="mock-subtitle">
                  Review the draft calculation and its supporting information.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-grid three">
              <div className="mock-card">
                <span className="mock-stat-label">Income total</span>{" "}
                <strong className="mock-stat" style={{ fontSize: "19px" }}>
                  <NumberTicker value={1250000} />
                </strong>{" "}
                <span className="mock-stat-note">LKR · Illustrative</span>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Expenses considered</span>{" "}
                <strong className="mock-stat" style={{ fontSize: "19px" }}>
                  <NumberTicker value={185000} />
                </strong>{" "}
                <span className="mock-stat-note">LKR · Illustrative</span>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Estimated amount</span>{" "}
                <strong className="mock-stat" style={{ fontSize: "19px" }}>
                  LKR —
                </strong>{" "}
                <span className="mock-stat-note">Pending calculation</span>
              </div>
            </div>
            <div className="mock-grid two" style={{ marginTop: "16px" }}>
              <div className="mock-card">
                <h4>Calculation breakdown</h4>
                <div className="mock-step">
                  <span className="mock-step-name">Total recorded income</span>{" "}
                  <strong style={{ fontSize: "10px" }}>1,250,000</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Reviewed expenses</span>{" "}
                  <strong style={{ fontSize: "10px" }}>185,000</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Other adjustments</span>{" "}
                  <strong style={{ fontSize: "10px" }}>To be reviewed</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Applicable tax rules</span>{" "}
                  <strong style={{ fontSize: "10px" }}>To be confirmed</strong>
                </div>
              </div>
              <div className="mock-card">
                <h4>Calculation context</h4>
                <div className="mock-step">
                  <div>
                    <div className="mock-step-name">Tax year</div>
                    <div className="mock-step-desc">2026</div>
                  </div>
                  <span className="mock-status blue">Selected</span>
                </div>
                <div className="mock-step">
                  <div>
                    <div className="mock-step-name">Applicable rules</div>
                    <div className="mock-step-desc">
                      Rule references should be displayed.
                    </div>
                  </div>
                </div>
                <div className="mock-step">
                  <div>
                    <div className="mock-step-name">Assumptions</div>
                    <div className="mock-step-desc">
                      Review calculation assumptions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mock-card" style={{ marginTop: "16px" }}>
              <h4>Outstanding questions</h4>
              <div className="mock-step">
                <div>
                  <div className="mock-step-name">
                    Unconfirmed expense category
                  </div>
                  <div className="mock-step-desc">
                    Review the classification.
                  </div>
                </div>
                <span className="mock-status orange">Needs review</span>
              </div>
              <div className="mock-step">
                <div>
                  <div className="mock-step-name">
                    Missing supporting record
                  </div>
                  <div className="mock-step-desc">
                    Check the associated document.
                  </div>
                </div>
                <span className="mock-status orange">Needs review</span>
              </div>
            </div>
            <div className="mock-alert warning">
              This is a draft preparation estimate, not an official tax
              assessment or submitted tax return.
            </div>
            <div className="mock-bottom">
              <div>
                <strong>Review your assumptions</strong>
                <p>Resolve outstanding questions before recalculating.</p>
              </div>
              <button tabIndex={-1} type="button" className="mock-button">
                Review assumptions →
              </button>
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-9",
    title: "Tax Preparation Report",
    description:
      "Bring reviewed information together in a structured preparation report.",
    tag: "Report generation",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · Reports
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item active">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Review your report before exporting.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">WORKSPACE / REPORTS</div>
                <h2 className="mock-title">Preparation report</h2>
                <p className="mock-subtitle">
                  Review your information before exporting your report.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div
              className="mock-card"
              style={{
                background: "#f6f9ff",
                borderColor: "#e1eaff",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div className="mock-breadcrumb">TAX PREPARATION SUMMARY</div>
                  <h3 style={{ fontSize: "17px", fontWeight: "800" }}>
                    Freelance Tax Report
                  </h3>
                  <p>Tax year 2026 · Draft preparation report</p>
                </div>
                <span className="mock-status blue">Draft report</span>
              </div>
            </div>
            <div className="mock-grid two" style={{ marginTop: "16px" }}>
              <div className="mock-card">
                <h4>Taxpayer profile</h4>
                <div className="mock-step">
                  <span className="mock-step-name">Taxpayer name</span>{" "}
                  <strong style={{ fontSize: "9px" }}>Jaaishan Miranda</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Activity</span>{" "}
                  <strong style={{ fontSize: "9px" }}>Freelance</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Tax year</span>{" "}
                  <strong style={{ fontSize: "9px" }}>2026</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Income source</span>{" "}
                  <strong style={{ fontSize: "9px" }}>To be confirmed</strong>
                </div>
              </div>
              <div className="mock-card">
                <h4>Income and expenses summary</h4>
                <div className="mock-step">
                  <span className="mock-step-name">Income total</span>{" "}
                  <strong style={{ fontSize: "9px" }}>1,250,000</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Expenses considered</span>{" "}
                  <strong style={{ fontSize: "9px" }}>185,000</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Estimated amount</span>{" "}
                  <strong style={{ fontSize: "9px" }}>LKR —</strong>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Calculation status</span>{" "}
                  <span className="mock-status orange">Draft</span>
                </div>
              </div>
            </div>
            <div className="mock-card" style={{ marginTop: "16px" }}>
              <h4>Calculation breakdown and rule references</h4>
              <p>
                The report should include the calculation explanation, relevant
                rules, applicable tax year and assumptions.
              </p>
              <div className="mock-alert info">
                Rule references and calculation details will be included in the
                completed report.
              </div>
            </div>
            <div className="mock-grid two" style={{ marginTop: "16px" }}>
              <div className="mock-card">
                <h4>Missing items</h4>
                <div className="mock-step">
                  <span className="mock-step-name">
                    Unconfirmed expense category
                  </span>{" "}
                  <span className="mock-status orange">Review</span>
                </div>
                <div className="mock-step">
                  <span className="mock-step-name">Supporting document</span>{" "}
                  <span className="mock-status red">Missing</span>
                </div>
              </div>
              <div className="mock-card">
                <h4>Assumptions and warnings</h4>
                <p>
                  The draft contains assumptions that should be checked before
                  relying on the estimate.
                </p>
                <div style={{ marginTop: "12px" }}>
                  <span className="mock-status orange">Requires review</span>
                </div>
              </div>
            </div>
            <div className="mock-bottom">
              <div>
                <strong>Have you reviewed this report?</strong>
                <p>Confirm that the information and assumptions are correct.</p>
              </div>
              <button tabIndex={-1} type="button" className="mock-button">
                Export draft ↓
              </button>
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: "screen-10",
    title: "History & Audit Trail",
    description:
      "Review previous preparation activity, saved changes and generated records.",
    tag: "Activity tracking",
    window: (
      <div className="mock-window">
        <div className="mock-top">
          <div className="mock-dots">
            <span className="mock-dot red"></span>{" "}
            <span className="mock-dot yellow"></span>{" "}
            <span className="mock-dot green"></span>
          </div>
          Tax Assistant · History
        </div>
        <div className="mock-body">
          <aside className="mock-sidebar">
            <div className="mock-brand">
              <div className="mock-brand-icon">T</div>
              Tax Assistant
            </div>
            <div className="mock-label">WORKSPACE</div>
            <div className="mock-nav">
              <div data-go="screen-2" className="mock-nav-item">
                ▦ Overview
              </div>
              <div data-go="screen-3" className="mock-nav-item">
                ◉ Tax profile
              </div>
              <div data-go="screen-4" className="mock-nav-item">
                ▤ Documents
              </div>
              <div data-go="screen-6" className="mock-nav-item">
                ▥ Financial records
              </div>
              <div data-go="screen-7" className="mock-nav-item">
                ✧ Tax guidance
              </div>
              <div data-go="screen-8" className="mock-nav-item">
                ◷ Tax estimate
              </div>
              <div data-go="screen-9" className="mock-nav-item">
                ▧ Reports
              </div>
              <div data-go="screen-10" className="mock-nav-item active">
                ◴ History
              </div>
            </div>
            <div className="mock-help">
              <strong>Need help?</strong>
              Review previous actions in your workspace.
            </div>
          </aside>
          <main className="mock-main">
            <div className="mock-page-top">
              <div>
                <div className="mock-breadcrumb">WORKSPACE / HISTORY</div>
                <h2 className="mock-title">History and activity</h2>
                <p className="mock-subtitle">
                  View previous preparation sessions and activity.
                </p>
              </div>
              <div className="mock-avatar">JM</div>
            </div>
            <div className="mock-grid three">
              <div className="mock-card">
                <span className="mock-stat-label">Today</span>{" "}
                <strong
                  style={{
                    display: "block",
                    fontSize: "12px",
                    marginTop: "12px",
                  }}
                >
                  Files uploaded
                </strong>
                <p>3 documents added to your workspace.</p>
                <div style={{ marginTop: "12px" }}>
                  <span className="mock-status green">Complete</span>
                </div>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Yesterday</span>{" "}
                <strong
                  style={{
                    display: "block",
                    fontSize: "12px",
                    marginTop: "12px",
                  }}
                >
                  Profile updated
                </strong>
                <p>Taxpayer details were updated.</p>
                <div style={{ marginTop: "12px" }}>
                  <span className="mock-status green">Saved</span>
                </div>
              </div>
              <div className="mock-card">
                <span className="mock-stat-label">Earlier</span>{" "}
                <strong
                  style={{
                    display: "block",
                    fontSize: "12px",
                    marginTop: "12px",
                  }}
                >
                  Estimate generated
                </strong>
                <p>Draft calculation created.</p>
                <div style={{ marginTop: "12px" }}>
                  <span className="mock-status orange">Draft</span>
                </div>
              </div>
            </div>
            <div className="mock-grid two" style={{ marginTop: "17px" }}>
              <div className="mock-card">
                <h4>Activity timeline</h4>
                <div className="mock-timeline" style={{ marginTop: "20px" }}>
                  <div className="mock-timeline-item">
                    <div className="mock-step-name">Files uploaded</div>
                    <div className="mock-step-desc">Today · 10:42 AM</div>
                    <p>
                      invoice_001.pdf, expense_receipt.pdf and
                      income_records.csv
                    </p>
                  </div>
                  <div className="mock-timeline-item">
                    <div className="mock-step-name">
                      Taxpayer profile updated
                    </div>
                    <div className="mock-step-desc">Yesterday · 3:15 PM</div>
                    <p>Freelance activity details were changed.</p>
                  </div>
                  <div className="mock-timeline-item">
                    <div className="mock-step-name">
                      Draft estimate generated
                    </div>
                    <div className="mock-step-desc">Earlier · 11:20 AM</div>
                    <p>A preparation estimate was created for review.</p>
                  </div>
                </div>
              </div>
              <div className="mock-card">
                <h4>Recent activity records</h4>
                <div className="mock-table-wrap" style={{ marginTop: "14px" }}>
                  <table className="mock-table">
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>Record</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Upload</td>
                        <td>3 documents</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>Edit</td>
                        <td>Tax profile</td>
                        <td>Saved</td>
                      </tr>
                      <tr>
                        <td>Generate</td>
                        <td>Tax estimate</td>
                        <td>Draft</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mock-alert info">
                  <strong>Audit trail</strong>
                  <br />
                  Relevant actions should record timestamps, affected records
                  and the authorised user.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    ),
  },
];
