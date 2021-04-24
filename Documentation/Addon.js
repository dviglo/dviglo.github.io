// Создаёт боковую панель сайта https://dviglo.github.io

{
    // Данный скрипт подключается последним, поэтому тело странички уже полностью сформировано.
    // Сохраняем тело странички в переменную
    let oldContent = document.body.innerHTML;

    // Очищаем тело
    document.body.innerHTML = "";

    // Ширина боковой панели
    const mainSidebarWidth = "120px";

    // Создаём боковую панель
    let mainSidebar = document.createElement("div");
    mainSidebar.style.float = "left";
    mainSidebar.style.padding = "10px";
    mainSidebar.style.width = mainSidebarWidth;
    mainSidebar.style.boxSizing = "border-box";
    mainSidebar.innerHTML =
        "<a href='" + GetRootPath() + "../MarkdownDocs/index.html'>Markdown</a><br>" +
        "<a href='" + GetRootPath() + "../Documentation/index.html'>Doxygen</a>";
    document.body.append(mainSidebar);

    // Создаём контейнер для старого содержимого странички
    let mainContent = document.createElement("div");
    mainContent.style.marginLeft = mainSidebarWidth;
    mainContent.style.boxSizing = "border-box";
    mainContent.innerHTML = oldContent;
    document.body.append(mainContent);
}
