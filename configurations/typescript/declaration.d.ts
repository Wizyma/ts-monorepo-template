// issues with css cf: https://stackoverflow.com/questions/48142521/ts-loader-css-loader-not-being-able-to-import-resolve-file
declare module '*.css' {
  const styles: { [key: string]: string };
  export = styles;
}
