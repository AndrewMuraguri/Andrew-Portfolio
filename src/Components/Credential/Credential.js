import docx from '../media/Andrew_MuraguriFront_end_Developer.docx'
import resume from '../media/Andrew_MuraguriFront_end_Developer.pdf'
import './Credential.css'
export function Credential() {
    return (
		<>
      <div class="container-fluid main">
        <div class="text-center main-text">
          <h3>Two formats of my resume</h3>
          <div class="c2a-btn footer-c2a-btn">
            <div class="btn-group btn-group-lg" role="group" aria-label="Call to action">
              <a type="button" class="btn btn-default btn-lg" href={resume} target="_blank" rel="noreferrer">PDF</a>
              <span class="btn-circle btn-or">or</span>
              <a type="button" class="btn btn-default btn-lg" href={docx} target="_blank" rel="noreferrer">DOCX</a>
            </div>
            </div>
          </div>
        </div>
		</>
	);
};
