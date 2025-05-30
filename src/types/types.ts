export interface Template {
  id: number;
  name: string;
  language: string;
  category: string;
  status: string;
  components: TemplateComponents;
  created_at: string;
  updated_at: string;
}

export interface TemplateComponents {
  header: {
    type: string;
    content: string;
  };
  body: {
    content: string;
  };
  footer: string;
  buttons: TemplateButton[];
}

export interface TemplateButton {
  id: number;
  type: string;
  text: string;
  url: string;
  index: number;
  phone_number?: string;
  phone_number_prefix?: string;
}
