import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { AppData } from 'src/app/data/app-data';
import { DomSanitizer } from '@angular/platform-browser';
import html2canvas from 'html2canvas';
import { JszipService } from 'src/app/lib/services/jszip.service';
declare var $: any;

@Component({
  selector: 'eg-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() previewEmailId: any;
  @Input() previewEmailLangKey: any;

  public iframeSrc: any;
  public langKey: string;
  public emailId: any;
  public useCommonHeader: boolean;
  public useCommonFooter: boolean;

  constructor(
    public appData: AppData,
    public sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {}

  ngOnInit() {

    const languageData = this.appData.getLanguage(this.previewEmailLangKey);

    this.langKey = this.previewEmailLangKey;
    this.emailId = this.previewEmailId;
    this.useCommonHeader = languageData.emails.templates[this.emailId].tags.customHeader;
    this.useCommonFooter = languageData.emails.templates[this.emailId].tags.customFooter;

    this.appData.previewData.id = this.emailId;
    this.appData.previewData.name = this.appData.getEmailData(this.langKey, this.emailId).name;
    this.appData.setPreviewIframeContent(this.langKey);

    // Sorry for this, the next project will build with https://ng-bootstrap.github.io/
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  getSrc() {
    return this.appData.getPreviewIframeContent();
  }

  toggleCollapsePreview() {
    if (document.body.classList.contains('preview-collapsed')) {
      this.renderer.removeClass(document.body, 'preview-collapsed');
    } else {
      this.renderer.addClass(document.body, 'preview-collapsed');
    }
  }

  downloadHtmlPreview() {
    const jsZip = new JszipService();
    const {html, filename} = this.appData.getHTMLPreview(this.langKey);
    jsZip.saveAsHtml(html, filename, 'text/html;charset=utf-8');
  }

  downloadImgPreview() {
    const {div, filename} = this.appData.getHTMLIframeContent(this.langKey);
    document.body.insertBefore(div, document.body.firstChild)

    html2canvas(div).then((canvas) => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL()
      link.click();
    })
    document.body.removeChild(div)
  }
}
