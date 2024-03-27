export interface CannedResponseQueryResult {
    data: CannedResponseQueryResultData;
}

export interface CannedResponseQueryResultData {
    cannedResponses: CannedResponse[];
}

export interface CannedResponse {
    id:              string;
    title:           string;
    category:        string;
    tags:            string[];
    templateContent: TemplateContent;
    attachments:     Attachment[];
}

export interface Attachment {
    fileName: string;
    mimeType: string;
    size:     number;
    url:      string;
    id:       string;
    handle:   string;
}

export interface TemplateContent {
    html:     string;
    markdown: string;
}
