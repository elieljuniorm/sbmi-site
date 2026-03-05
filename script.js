// Dados simulados seguindo a estrutura exata da API
const mockData = {
    users: {
        current_page: 1,
        data: [
            { ID: 100, Name: "Carlos", Surname: "Mendes", Email: "carlos.mendes@fazenda.com", Type: 2, Active: 1 },
            { ID: 101, Name: "Ana", Surname: "Beatriz", Email: "ana.beatriz@fazenda.com", Type: 1, Active: 1 },
            { ID: 102, Name: "João", Surname: "Pedroso", Email: "joao.pedroso@fazenda.com", Type: 2, Active: 1 },
            { ID: 103, Name: "Maria", Surname: "Cristina", Email: "maria.cristina@fazenda.com", Type: 1, Active: 0 },
            { ID: 104, Name: "Pedro", Surname: "Henrique", Email: "pedro.henrique@fazenda.com", Type: 2, Active: 1 },
            { ID: 105, Name: "Lucia", Surname: "Santos", Email: "lucia.santos@fazenda.com", Type: 1, Active: 1 },
            { ID: 106, Name: "Roberto", Surname: "Carlos", Email: "roberto.carlos@fazenda.com", Type: 2, Active: 1 },
            { ID: 107, Name: "Cristina", Surname: "Lima", Email: "cristina.lima@fazenda.com", Type: 1, Active: 1 },
            { ID: 108, Name: "Antonio", Surname: "Ferreira", Email: "antonio.ferreira@fazenda.com", Type: 2, Active: 1 },
            { ID: 109, Name: "Fernanda", Surname: "Oliveira", Email: "fernanda.oliveira@fazenda.com", Type: 1, Active: 1 },
            { ID: 110, Name: "José", Surname: "Almeida", Email: "jose.almeida@fazenda.com", Type: 2, Active: 1 },
            { ID: 111, Name: "Mariana", Surname: "Souza", Email: "mariana.souza@fazenda.com", Type: 1, Active: 1 },
            { ID: 112, Name: "Paulo", Surname: "Costa", Email: "paulo.costa@fazenda.com", Type: 2, Active: 0 },
            { ID: 113, Name: "Camila", Surname: "Ribeiro", Email: "camila.ribeiro@fazenda.com", Type: 1, Active: 1 },
            { ID: 114, Name: "Ricardo", Surname: "Martins", Email: "ricardo.martins@fazenda.com", Type: 2, Active: 1 },
            { ID: 115, Name: "Patricia", Surname: "Carvalho", Email: "patricia.carvalho@fazenda.com", Type: 1, Active: 1 },
            { ID: 116, Name: "Marcos", Surname: "Araujo", Email: "marcos.araujo@fazenda.com", Type: 2, Active: 1 },
            { ID: 117, Name: "Juliana", Surname: "Gomes", Email: "juliana.gomes@fazenda.com", Type: 1, Active: 0 },
            { ID: 118, Name: "Rafael", Surname: "Barbosa", Email: "rafael.barbosa@fazenda.com", Type: 2, Active: 1 },
            { ID: 119, Name: "Beatriz", Surname: "Rocha", Email: "beatriz.rocha@fazenda.com", Type: 1, Active: 1 }
        ],
        first_page_url: "http://api.url/v1/users?page=1",
        from: 1,
        last_page: 3,
        last_page_url: "http://api.url/v1/users?page=5",
        next_page_url: "http://api.url/v1/users?page=2",
        path: "http://api.url/v1/users",
        per_page: 20,
        prev_page_url: null,
        to: 20,
        total: 100
    },

    farms: [
        { ID: 55, Name: "Fazenda Santa Maria", City: "Ribeirão Preto", Latitude: -21.1775, Longitude: -47.8100, users: [100, 101] },
        { ID: 56, Name: "Fazenda Boa Vista", City: "Araraquara", Latitude: -21.7942, Longitude: -48.1756, users: [100] },
        { ID: 57, Name: "Sítio Esperança", City: "São Carlos", Latitude: -22.0175, Longitude: -47.8908, users: [101, 102] },
        { ID: 58, Name: "Fazenda Santa Fé", City: "Ribeirão Preto", Latitude: -21.1500, Longitude: -47.8500, users: [102] },
        { ID: 59, Name: "Fazenda Rio Claro", City: "Rio Claro", Latitude: -22.4108, Longitude: -47.5606, users: [102, 103] },
        { ID: 60, Name: "Fazenda São José", City: "Uberaba", Latitude: -19.7472, Longitude: -47.9319, users: [103, 104] },
        { ID: 61, Name: "Fazenda Paraíso", City: "Uberlândia", Latitude: -18.9186, Longitude: -48.2772, users: [104] },
        { ID: 62, Name: "Fazenda Recanto", City: "Araguari", Latitude: -18.6472, Longitude: -48.1872, users: [104, 105] },
        { ID: 63, Name: "Sítio das Palmeiras", City: "Londrina", Latitude: -23.3100, Longitude: -51.1628, users: [105] },
        { ID: 64, Name: "Fazenda Campo Verde", City: "Cascavel", Latitude: -24.9558, Longitude: -53.4553, users: [106, 107] },
        { ID: 65, Name: "Fazenda Sem Coordenada", City: "Cidade Teste", Latitude: null, Longitude: null, users: [107] }
    ],

    userFarms: {
        100: { data: [{ ID: 55, Name: "Fazenda Santa Maria" }, { ID: 56, Name: "Fazenda Boa Vista" }] },
        101: { data: [{ ID: 55, Name: "Fazenda Santa Maria" }, { ID: 57, Name: "Sítio Esperança" }] },
        102: { data: [{ ID: 57, Name: "Sítio Esperança" }, { ID: 58, Name: "Fazenda Santa Fé" }, { ID: 59, Name: "Fazenda Rio Claro" }] },
        103: { data: [{ ID: 59, Name: "Fazenda Rio Claro" }, { ID: 60, Name: "Fazenda São José" }] },
        104: { data: [{ ID: 60, Name: "Fazenda São José" }, { ID: 61, Name: "Fazenda Paraíso" }, { ID: 62, Name: "Fazenda Recanto" }] },
        105: { data: [{ ID: 62, Name: "Fazenda Recanto" }, { ID: 63, Name: "Sítio das Palmeiras" }] },
        106: { data: [{ ID: 64, Name: "Fazenda Campo Verde" }] },
        107: { data: [{ ID: 64, Name: "Fazenda Campo Verde" }, { ID: 65, Name: "Fazenda Sem Coordenada" }] }
    }
};

// Função auxiliar para encontrar usuários por IDs
function getUsersByIds(userIds) {
    return mockData.users.data.filter(user => userIds.includes(user.ID));
}

// Estado da aplicação
let currentView = 'users';
let currentPage = 1;
const itemsPerPage = 10;
let currentData = null;
let totalPages = 1;

// Elementos DOM
const itemsList = document.getElementById('itemsList');
const pagination = document.getElementById('pagination');
const loadingSpinner = document.getElementById('loadingSpinner');
const modal = document.getElementById('detailsModal');
const modalBody = document.getElementById('modalBody');
const modalTitle = document.getElementById('modalTitle');

// Variável global para controlar o mapa atual
let currentMap = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
    updateScreenTitle();
});

function setupEventListeners() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            currentPage = 1;
            updateScreenTitle();
            loadData();
        });
    });
}

function updateScreenTitle() {
    const titleElement = document.getElementById('screen-title');
    if (titleElement) {
        titleElement.textContent = currentView === 'users' ? 'Usuários' : 'Fazendas';
    }
}

// Simula chamadas de API com a estrutura real
async function fetchData(view) {
    showLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    showLoading(false);

    if (view === 'users') {
        return {
            ...mockData.users,
            data: mockData.users.data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        };
    } else {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return {
            data: mockData.farms.slice(start, end),
            total: mockData.farms.length,
            current_page: currentPage,
            last_page: Math.ceil(mockData.farms.length / itemsPerPage)
        };
    }
}

async function loadData() {
    try {
        const response = await fetchData(currentView);

        if (currentView === 'users') {
            currentData = response.data;
            totalPages = response.last_page || 1;
        } else {
            currentData = response.data;
            totalPages = response.last_page || Math.ceil(mockData.farms.length / itemsPerPage);
        }

        renderItems();
        renderPagination();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        itemsList.innerHTML = '<p class="error-message">Erro ao carregar dados</p>';
    }
}

function renderItems() {
    itemsList.innerHTML = '';

    if (!currentData || currentData.length === 0) {
        itemsList.innerHTML = '<p class="empty-message">Nenhum item encontrado</p>';
        return;
    }

    // Adiciona cabeçalho da lista para ambas as visualizações
    const header = document.createElement('div');
    header.className = 'list-header';

    if (currentView === 'users') {
        header.innerHTML = `
            <span>NOME</span>
            <span>EMAIL</span>
        `;
    } else {
        header.innerHTML = `
            <span>FAZENDA</span>
            <span>CIDADE</span>
            <span>COORDENADAS</span>
        `;
    }
    itemsList.appendChild(header);

    currentData.forEach(item => {
        if (currentView === 'users') {
            itemsList.appendChild(createUserCard(item));
        } else {
            itemsList.appendChild(createFarmCard(item));
        }
    });
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.onclick = () => openUserModal(user);

    card.innerHTML = `
        <h3>${user.Name} ${user.Surname}</h3>
        <div class="item-subtitle">${user.Email}</div>
    `;

    return card;
}

function createFarmCard(farm) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.onclick = () => openFarmModal(farm);

    const hasCoordinates = farm.Latitude && farm.Longitude;
    const coordinatesText = hasCoordinates ?
        `${farm.Latitude.toFixed(4)}, ${farm.Longitude.toFixed(4)}` :
        '---';

    card.innerHTML = `
        <h3>${farm.Name}</h3>
        <div class="item-subtitle">${farm.City}</div>
        <div class="item-location">
            <i class="fas fa-map-marker-alt"></i>
            ${coordinatesText}
        </div>
    `;

    return card;
}

function renderPagination() {
    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            loadData();
        }
    };
    pagination.appendChild(prevBtn);

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            loadData();
        };
        pagination.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadData();
        }
    };
    pagination.appendChild(nextBtn);
}

function showLoading(show) {
    loadingSpinner.style.display = show ? 'flex' : 'none';
}

// Modal Functions
async function openUserModal(user) {
    showLoading(true);

    await new Promise(resolve => setTimeout(resolve, 300));
    const userFarms = mockData.userFarms[user.ID] || { data: [] };

    modalTitle.textContent = 'Detalhes do Usuário';

    let farmsHtml = '';
    if (userFarms.data.length > 0) {
        farmsHtml = userFarms.data.map(farm =>
            `<li><i class="fas fa-tractor"></i> ${farm.Name}</li>`
        ).join('');
    } else {
        farmsHtml = '<li class="text-muted">Nenhuma fazenda vinculada</li>';
    }

    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-item full-width">
                <label>Nome Completo</label>
                <p>${user.Name} ${user.Surname}</p>
            </div>
            
            <div class="detail-item full-width">
                <label>Email</label>
                <p>${user.Email}</p>
            </div>
            
            <div class="detail-item full-width">
                <label>Fazendas Vinculadas</label>
                <ul class="farms-list">
                    ${farmsHtml}
                </ul>
            </div>
        </div>
    `;

    showLoading(false);
    modal.classList.add('show');
}

async function openFarmModal(farm) {
    modalTitle.textContent = 'Detalhes da Fazenda';

    // Busca todos os usuários vinculados a esta fazenda
    const linkedUsers = getUsersByIds(farm.users || []);

    const hasCoordinates = farm.Latitude && farm.Longitude &&
        !isNaN(farm.Latitude) && !isNaN(farm.Longitude) &&
        farm.Latitude !== null && farm.Longitude !== null;

    let mapHtml = '';
    let usersHtml = '';

    if (hasCoordinates) {
        mapHtml = `
            <div class="map-container">
                <div id="farmMap" class="modal-map"></div>
                <div class="coordinates-info">
                    <div class="coord-item">
                        <label>Latitude</label>
                        <span>${farm.Latitude.toFixed(6)}°</span>
                    </div>
                    <div class="coord-item">
                        <label>Longitude</label>
                        <span>${farm.Longitude.toFixed(6)}°</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        mapHtml = `
            <div class="map-container">
                <div class="map-loading">
                    <i class="fas fa-map-marked-alt" style="font-size: 2rem; color: var(--text-muted); margin-right: 8px;"></i>
                    <span>Coordenadas não disponíveis</span>
                </div>
            </div>
        `;
    }

    if (linkedUsers.length > 0) {
        usersHtml = linkedUsers.map(user => {
            const typeName = user.Type === 1 ? 'Proprietário' : 'Administrador';
            const statusClass = user.Active === 1 ? 'status-active' : 'status-inactive';
            const statusText = user.Active === 1 ? 'Ativo' : 'Inativo';

            return `
                <li>
                    <i class="fas fa-user"></i>
                    <div style="flex: 1;">
                        <strong>${user.Name} ${user.Surname}</strong>
                        <div style="display: flex; gap: 8px; margin-top: 4px;">
                            <span class="${statusClass}" style="font-size: 0.7rem;">${statusText}</span>
                            <span class="type-badge" style="font-size: 0.7rem;">${typeName}</span>
                        </div>
                    </div>
                </li>
            `;
        }).join('');
    } else {
        usersHtml = '<li class="text-muted">Nenhum usuário vinculado</li>';
    }

    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-item full-width">
                <label>Nome da Fazenda</label>
                <p>${farm.Name}</p>
            </div>
            
            <div class="detail-item full-width">
                <label>Cidade</label>
                <p>${farm.City}</p>
            </div>
            
            ${mapHtml}
            
            <div class="detail-item full-width">
                <label>Usuários Vinculados (${linkedUsers.length})</label>
                <ul class="users-list" style="max-height: 200px; overflow-y: auto;">
                    ${usersHtml}
                </ul>
            </div>
        </div>
    `;

    modal.classList.add('show');

    if (hasCoordinates) {
        setTimeout(() => {
            initializeMap(farm.Latitude, farm.Longitude, farm.Name);
        }, 100);
    }
}

function initializeMap(lat, lng, farmName) {
    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }

    const mapElement = document.getElementById('farmMap');
    if (!mapElement) return;

    try {
        currentMap = L.map('farmMap').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(currentMap);

        const marker = L.marker([lat, lng]).addTo(currentMap);
        marker.bindPopup(`<b>${farmName}</b>`).openPopup();

        setTimeout(() => {
            if (currentMap) {
                currentMap.invalidateSize();
            }
        }, 200);

    } catch (error) {
        console.error('Erro ao inicializar mapa:', error);
        const mapContainer = document.getElementById('farmMap');
        if (mapContainer) {
            mapContainer.innerHTML = '<div class="map-loading">Erro ao carregar mapa</div>';
        }
    }
}

function closeModal() {
    modal.classList.remove('show');
    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }
}

// Fecha modal ao clicar fora
window.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

// Fecha modal com tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});